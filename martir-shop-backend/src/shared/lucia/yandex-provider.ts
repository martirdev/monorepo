import { OAuth2ProviderWithPKCE } from "arctic";
import { TimeSpan, createDate } from "oslo";
import { OAuth2Client } from "oslo/oauth2";

const authorizeEndpoint = "https://oauth.yandex.ru/authorize";
const tokenEndpoint = "https://oauth.yandex.ru/token";

export class Yandex implements OAuth2ProviderWithPKCE {
  private client: OAuth2Client;
  private clientSecret: string;

  constructor(clientId: string, clientSecret: string, redirectURI: string) {
    this.client = new OAuth2Client(clientId, authorizeEndpoint, tokenEndpoint, {
      redirectURI,
    });
    this.clientSecret = clientSecret;
  }

  public async createAuthorizationURL(
    state: string,
    codeVerifier: string,
    options?: {
      scopes?: string[];
    }
  ): Promise<URL> {
    const scopes = options?.scopes ?? [];
    const url = await this.client.createAuthorizationURL({
      state,
      codeVerifier,
      scopes: [...scopes],
    });
    url.searchParams.set("nonce", "_");
    return url;
  }

  public async validateAuthorizationCode(
    code: string,
    codeVerifier: string
  ): Promise<YandexTokens> {
    const result =
      await this.client.validateAuthorizationCode<AuthorizationCodeResponseBody>(
        code,
        {
          authenticateWith: "request_body",
          credentials: this.clientSecret,
          codeVerifier,
        }
      );
    const tokens: YandexTokens = {
      accessToken: result.access_token,
      refreshToken: result.refresh_token ?? null,
      accessTokenExpiresAt: createDate(new TimeSpan(result.expires_in, "s")),
      idToken: result.id_token,
    };
    return tokens;
  }

  public async refreshAccessToken(
    refreshToken: string
  ): Promise<YandexRefreshedTokens> {
    const result =
      await this.client.refreshAccessToken<RefreshTokenResponseBody>(
        refreshToken,
        {
          authenticateWith: "request_body",
          credentials: this.clientSecret,
        }
      );
    const tokens: YandexRefreshedTokens = {
      accessToken: result.access_token,
      accessTokenExpiresAt: createDate(new TimeSpan(result.expires_in, "s")),
    };
    return tokens;
  }
}

interface AuthorizationCodeResponseBody {
  access_token: string;
  refresh_token?: string;
  expires_in: number;
  id_token: string;
}

interface RefreshTokenResponseBody {
  access_token: string;
  expires_in: number;
}

export interface YandexTokens {
  accessToken: string;
  refreshToken: string | null;
  accessTokenExpiresAt: Date;
  idToken: string;
}

export interface YandexRefreshedTokens {
  accessToken: string;
  accessTokenExpiresAt: Date;
}
