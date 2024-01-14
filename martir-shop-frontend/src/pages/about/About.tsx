import {ContentBlock} from '_features/content-block';
import {Container} from '_shared/container';

function About() {
  return (
    <Container px={3} className="py-24" width="small">
      <h1 className="text-center text-page-title uppercase">О нас</h1>
      <div className="mt-10">
        <ContentBlock id="f433b6e0db494fa2b23e3d897e49cce1" />
      </div>
    </Container>
  );
}

export default About;
