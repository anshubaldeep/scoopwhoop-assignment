import React from "react";
import { Card, Col } from "react-bootstrap";

function timeSince(date) {
  var seconds = Math.floor((new Date() - date) / 1000);

  var interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) === 1
      ? Math.floor(interval) + " year ago "
      : +Math.floor(interval) + " years ago ";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) === 1
      ? Math.floor(interval) + " month ago "
      : +Math.floor(interval) + " months ago ";
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) === 1
      ? Math.floor(interval) + " day ago "
      : +Math.floor(interval) + " days ago ";
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) === 1
      ? Math.floor(interval) + " hour ago "
      : +Math.floor(interval) + " hours ago ";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) === 1
      ? Math.floor(interval) + " minute ago "
      : +Math.floor(interval) + " minutes ago ";
  }
  return Math.floor(interval) === 1
    ? Math.floor(interval) + " second ago "
    : +Math.floor(interval) + " seconds ago ";
}

const NewsCard = (props) => {
  let date = new Date(props.date);
  date = timeSince(date);
  return (
    <Col lg={3} md={6} sm={12}>
      <Card className="news-card">
        <a href={`https://www.scoopwhoop.com/${props.slug}`} className="news-link" alt="link">
          <div className="news-image">
            <Card.Img variant="top" src={props.image} />
          </div>
        </a>

        <Card.Body>
          <Card.Title>{props.category}</Card.Title>
          <Card.Text>
          <a href={`https://www.scoopwhoop.com/${props.slug}`} className="news-link" alt="link">
              <div className="news-title">{props.headline}</div>
            </a>
          </Card.Text>
          <Card.Subtitle>
            <div className="author"><a href={`https://www.scoopwhoop.com/author/${props.author_url}`} alt='autjor-url'>{props.author}</a></div>
            <div className="read-time">
              {date} | {props.time}
            </div>
          </Card.Subtitle>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default NewsCard;
