import React, {useEffect } from "react";
import { Col, Row, Card } from "react-bootstrap";
import { useSelector } from "react-redux";

const CardData = () => {
  const getHeadCount = useSelector((state) => state.resources.count);
  const getTotalHours = useSelector((state) => state.combined.datas);
  const getToolList = useSelector((state) => state.toolList.toolCount);
 
  let tValue;
  if (getTotalHours.length > 0) {
    const setHours = getTotalHours ? getTotalHours[0].months : [];

    const thours = setHours.map((h) => {
      return h.hours_spent;
    });
    if (thours.length == 0) return;
    tValue = parseInt(
      thours.reduce((t, num) => {
        return t + num;
      })
    );
  } else return;
  const sampleData = [
    {
      id: 1,
      title: "Total Product",
      value: getToolList,
      color: "text-c-yellow",
      icon: "icon-product-c",
      bgColor: "bg-c-yellow",
    },
    {
      id: 2,
      title: "Total Resource",
      value: getHeadCount,
      color: "text-c-green",
      icon: "icon-business-team-icon1",
      bgColor: "bg-c-green",
    },
    {
      id: 3,
      title: "Production Hours",
      value: tValue,
      color: "text-c-pink",
      icon: "icon-working-hours-icon",
      bgColor: "bg-c-pink",
    },
    {
      id: 4,
      title: "Estimated Hours",
      color: "text-c-blue",
      value: 0,
      icon: "icon-time-estimate-b",
      bgColor: "bg-c-blue",
    },
  ];

  return (
    <Row>
      {sampleData.map((data) => (
        <Col key={data.id} xl="3" xs="12" md="6" sm="6" lg="6">
          <Card>
            <Card.Body>
              <Row className="align-items-center">
                <Col xs="9">
                  <h4 className={`${data.color}`}>{data.value}</h4>
                  <h6 className="text-muted m-b-0">{data.title}</h6>
                </Col>
                <Col xs="3" className="text-right">
                  <span
                    className={`justify-content-center ${data.icon} ${data.color}`}
                  ></span>
                </Col>
              </Row>
            </Card.Body>
            <Card.Footer className={`${data.bgColor}`}>
              <Row>
                <Col xs="8">
                  <p className="text-white m-b-0">% change</p>
                </Col>
                <Col xs="4" className="text-right">
                  <span className="icon-stats-dots text-white"></span>
                </Col>
              </Row>
            </Card.Footer>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default CardData;
