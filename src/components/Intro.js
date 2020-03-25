import React from 'react';
import { Jumbotron, Container} from 'reactstrap';

const Intro = (props) => {
  return (
    <div className="mt-5">
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Welcome</h1>
          <p className="lead">ลองเลือกหัวข้อที่ต้องการทำดูสิ!</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Intro;