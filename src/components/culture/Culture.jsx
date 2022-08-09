import React from "react";
import Side from "../home/sideContent/side/Side";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Pagination from "react-bootstrap/Pagination";
import { popular } from "../../dummyData";
import "./culture.css";
import { Panel, } from 'rsuite';
import Navbar from "../common/navbar/Navbar";
import Footer from "../common/footer/Footer";
const Culture = () => {
  return (
    <>
    <Navbar />
      <main>
        <div className="container categories-container">
          <section className="mainContent">
            <Panel header="Eğitim" bordered>
              <span className="headerContent">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus corrupti, saepe ipsa quod nemo, suscipit ab impedit itaque deleniti, eaque tempora ratione perspiciatis pariatur iste assumenda quis veniam nisi aliquid.</span>
            </Panel> 
            <Row xs={1} md={4} className="g-4">
              {popular.map((val) => (
                <Col>
                  <Card>
                    <Card.Img variant="top" src={val.cover} />
                    <Card.Body>
                      <Card.Title>{val.title.slice(0, 40)}...</Card.Title>
                      <Card.Text>
                        {val.desc.slice(0, 150)}...
                      </Card.Text>
                    </Card.Body>
                    <div className="go-detail">
                      <a href="/SinglePage/1">Devamını Oku</a>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
            <div className="pagination-position">
            <Pagination>
              <Pagination.Prev />
              <Pagination.Item>{1}</Pagination.Item>
              <Pagination.Ellipsis />

              <Pagination.Item>{10}</Pagination.Item>
              <Pagination.Item>{11}</Pagination.Item>
              <Pagination.Item active>{12}</Pagination.Item>
              <Pagination.Item>{13}</Pagination.Item>
              <Pagination.Item>{14}</Pagination.Item>

              <Pagination.Ellipsis />
              <Pagination.Item>{20}</Pagination.Item>
              <Pagination.Next />
            </Pagination>
            </div>
          </section>
          <section className="sideContent">
            <Side />
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Culture;
