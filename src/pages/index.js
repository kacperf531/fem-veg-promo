import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import Gallery from 'components/gallery';
import Modal from 'containers/modal';
import { graphql } from 'gatsby';

const Index = ({ data }) => (
  <Layout>
    <Box>
      <Title as="h2" size="large">
        {data.homeJson.content.childMarkdownRemark.rawMarkdownBody}
      </Title>
      <Title style="small"><br/>Co mają ze sobą wspólnego prawa kobiet i prawa zwierząt? Wszystko. <br/> Dyskryminacja kobiet jest strukturalna, podobnie jak dyskryminacja zwierząt. Te drugie są jednak ofiarami meta wykluczenia: odmawia się im nawet statusu ofiary, przemoc wobec nich jest znormalizowana. Możemy oczekiwać od feministek, podobnie jak od innych osób walczących o sprawiedliwość społeczną, że znając i rozumiejąc mechanizmy wykluczenia, dostrzegą je wszędzie tam gdzie one są i odmowy  uczestniczenia w dyskryminacji innych, co jest naturalnym zachowaniem emancypacyjnym.</Title>
      <br/> - J.Wiśniewska<br/> 
      <Modal>
        <Title as="h1" size="small">Sobota, 23.01.2021</Title>
        <p><br/>Krowy mleczne - najbardziej wykorzystywane matki. (A. Żuchniewicz), godzina 18:00<br/> link do spotkania: <a href="https://meet.jit.si/KrowyMleczneNajbardziejWykorzystywaneMatki"> Jit.si (sesja interaktywna)</a></p>
        <p><br/>O prawach reprodukcyjnych jednostki nad jajecznicą. (A. Witańska), godzina 20:00 <a href="https://meet.jit.si/OPrawachJednostkiNadJajecznica"> Jit.si (sesja interaktywna) <a href="https://www.youtube.com/watch?v=-SQ75Nb91R4">youtube (live stream)</a></a><br/></p>
        <Title as="h1" size="small">Niedziela, 24.01.2021</Title>
        <p><br/>Jaki jest problem z byciem suką? W poszukiwaniu językowych manipulacji. (J. Wiśniewska), godzina 18:00 <a href="https://8x8.vc/weganizmtofeminizm">jitsi(sesja interaktywna)</a> <a href="https://www.youtube.com/watch?v=PeKS3-tGV7g">youtube(live stream)</a><br/></p>
        <p><br/>Females support females - dumne hasło utopione w szklance mleka. (M. Kohut), godzina 20:00 <a href="https://8x8.vc/weganizmtofeminizm">jitsi(sesja interaktywna)</a><br/></p>
        <Title as="h1" size="small">Linki do spotkań podamy na 30 minut przed rozpoczęciem na stronie i na fb/twitterze.</Title>
      </Modal>
    </Box>
    <Gallery items={data.homeJson.gallery} />
  </Layout>
);

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  query HomepageQuery {
    homeJson {
      title
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
      gallery {
        title
        copy
        image {
          childImageSharp {
            fluid(maxHeight: 500, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
