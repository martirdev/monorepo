import { createRoute, redirect, useNavigate } from "@tanstack/react-router";
import { FC, useState } from "react";

import { sharedRoutes } from "@/pages/router";
import { Button } from "@/shared/ui/button";
import { useForm } from "@tanstack/react-form";
import { authClient } from "@/shared/lib/auth";
import { Label } from "@/shared/ui/label";
import { Input } from "@/shared/ui/input";
import { toast } from "sonner";

const SignInPage: FC = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    onSubmit: async ({ value }) => {
      authClient.signIn.email(
        {
          email: value.email,
          password: value.password,
        },
        {
          onResponse: () => {
            setLoading(false);
          },
          onRequest: () => {
            setLoading(true);
          },
          onError: (ctx: any) => {
            toast.error(ctx.error.message);
          },
          onSuccess: async () => {
            navigate({
              to: "/console",
            });
          },
        },
      );
    },
  });

  return (
    <div className="w-full">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Добро пожаловать!</h1>
            <p className="text-balance text-muted-foreground">
              Начни управлять товарами
            </p>
          </div>
          <div className="space-y-8">
            <div className="space-y-4">
              <form.Field name="email">
                {(field) => (
                  <div className="space-y-2">
                    <Label htmlFor={field.name}>Почта</Label>
                    <Input
                      id={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                    />
                  </div>
                )}
              </form.Field>
              <form.Field name="password">
                {(field) => (
                  <div className="space-y-2">
                    <Label htmlFor={field.name}>Пароль</Label>
                    <Input
                      id={field.name}
                      type="password"
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                    />
                  </div>
                )}
              </form.Field>
            </div>
            <Button
              className="w-full"
              onClick={form.handleSubmit}
              disabled={loading}
            >
              Войти
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const signInRoute = createRoute({
  beforeLoad: async ({ context }) => {
    if (context.user) {
      throw redirect({
        to: "/",
      });
    }
  },
  component: SignInPage,
  getParentRoute: () => sharedRoutes,
  path: "signin",
});
