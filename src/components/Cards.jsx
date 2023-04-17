import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const Cards = () => {
  return (
    
    <CardGroup >
      <h1 className='col-md-12 text-center p-5 my-md-5 border-top border-bottom'>History</h1>
      <Card className='m-3' border="light">
        <Card.Img src="./img/Medieval.jpg" height={400}/>
        <Card.ImgOverlay>
        <Card.Body>
          <Card.Title class="text-light text-uppercase text-center pb-3"  >Medieval</Card.Title>
          <Card.Text class="text-light" id='card-info'>
          In early Western medieval art interest in landscape disappears almost entirely, kept alive only in copies of Late Antique works such as the Utrecht Psalter; the last reworking of this source, in an early Gothic version, reduces the previously extensive landscapes to a few trees filling gaps in the composition, with no sense of overall space. A revival in interest in nature initially mainly manifested itself in depictions of small gardens such as the Hortus Conclusus or those in millefleur tapestries. The frescos of figures at work or play in front of a background of dense trees in the Palace of the Popes, Avignon are probably a unique survival of what was a common subject. Several frescos of gardens have survived from Roman houses like the Villa of Livia.
          </Card.Text>
        </Card.Body>
        </Card.ImgOverlay>        
        <Card.Footer>
          <small className="text-muted">Last updated 2 months ago</small>
        </Card.Footer>
      </Card>
      <Card className='m-3' border="light">
        <Card.Img src="./img/Renaissance.jpg" height={400} />
        <Card.ImgOverlay>
        <Card.Body>
          <Card.Title class="text-light text-uppercase text-center pb-3">Renaissance</Card.Title>
          <Card.Text class="text-light" id='card-info'> 
          Landscape backgrounds for various types of painting became increasingly prominent and skillful during the 15th century. The period around the end of the 15th century saw pure landscape drawings and watercolours from Leonardo da Vinci, Albrecht Dürer, Fra Bartolomeo and others, but pure landscape subjects in painting and printmaking, still small, were first produced by Albrecht Altdorfer and others of the German Danube School in the early 16th century. However, the outsides of the wings of a triptych by Gerard David, dated to "about 1510-15", are the earliest from the Low Countries, and possibly in Europe. At the same time Joachim Patinir in the Netherlands developed the "world landscape" a style of panoramic landscape with small figures and using a high aerial viewpoint, that remained influential for a century, being used and perfected by Pieter Brueghel the Elder. 
          </Card.Text>
        </Card.Body>
        </Card.ImgOverlay>        
        <Card.Footer>
          <small className="text-muted">Last updated 1 year ago</small>
        </Card.Footer>
      </Card>
      <Card className='m-3' border="light">
        <Card.Img src="./img/Centuries.jpg" height={400} />
        <Card.ImgOverlay>
        <Card.Body>
          <Card.Title class="text-light text-uppercase text-center pb-3">17th and 18th centuries</Card.Title>
          <Card.Text class="text-light" id='card-info'>
          The popularity of exotic landscape scenes can be seen in the success of the painter Frans Post, who spent the rest of his life painting Brazilian landscapes after a trip there in 1636–1644. Other painters who never crossed the Alps could make money selling Rhineland landscapes, and still others for constructing fantasy scenes for a particular commission such as Cornelis de Man's view of Smeerenburg in 1639.Compositional formulae using elements like the repoussoir were evolved which remain influential in modern photography and painting, notably by Poussin and Claude Lorrain, both French artists living in 17th century Rome and painting largely classical subject-matter, or Biblical scenes set in the same landscapes. Unlike their Dutch contemporaries, Italian and French landscape artists still most often wanted to keep their classification within the hierarchy of genres as history painting by including small figures to represent a scene from classical mythology or the Bible. 
          </Card.Text>
        </Card.Body>
        </Card.ImgOverlay>                
        <Card.Footer>
          <small className="text-muted text-right">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  )
}

export default Cards