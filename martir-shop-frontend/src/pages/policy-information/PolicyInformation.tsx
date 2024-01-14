import {ContentBlock} from '_features/content-block';
import {Container} from '_shared/container';

function PolicyInformation() {
  return (
    <Container px={3} className="py-24" width="large">
      <h1 className="text-page-title uppercase">Политика конфиденциальности</h1>
      <div className="mt-10">
        <ContentBlock id="f7d5885f18794c12b08e63c04c2b33af" />
      </div>
    </Container>
  );
}

export default PolicyInformation;
