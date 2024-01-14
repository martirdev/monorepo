import {ContentBlock} from '_features/content-block';
import {Container} from '_shared/container';

function LegalInformation() {
  return (
    <Container px={3} className="py-24" width="large">
      <h1 className="text-page-title uppercase">Правовая информация</h1>
      <div className="mt-10">
        <ContentBlock id="9c864923873a428f9fe86ac5542020f0" />
      </div>
    </Container>
  );
}

export default LegalInformation;
