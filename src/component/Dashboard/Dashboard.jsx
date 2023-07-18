import React, { useState, useEffect, lazy } from "react";
import { Col, Row, Card } from "react-bootstrap";
import { ChartColorPalette } from "@core/constants";
import { toolListAction } from "src/actions/toolListAction";
import { totalResourceAction } from "src/actions/totalResourceAction";
import { combinedDataAction } from "src/actions/combinedDataAction";
import useToolList from "@hooks/useToolList";
import useBranches from "@hooks/useBranches";
import useToolWiseTeam from "@hooks/useToolWiseTeam";
import { toolWiseTeamAction } from "src/actions/toolWiseTeamAction";

const ChartCreate = lazy(() => import("./ChartCreate"));
const TeamChart = lazy(() => import("./TeamChart"));
const BranchChart = lazy(() => import("./BranchChart"));
const CardInformation = lazy(() => import("@shared/card/card.component"));

import { useDispatch, useSelector } from "react-redux";

const Dashboard = () => {
  const [btnActive, setBtnActive] = useState("team");
  const [teamDatas, setTeamDatas] = useState([]);
  const monthWiseData = useSelector((state) => state.combined.datas);
  const [toolList, getToolList] = useToolList();
  const [branchesList, getBranchesData] = useBranches();
  let [toolandTeam] = useToolWiseTeam();
  const chartColor = ChartColorPalette;
  const toolWiseTeam = useSelector(
    (state) => state.toolWiseTeam.toolWiseTeamDatas
  );
  const dispatch = useDispatch();

  const branchparam = { grpKey: "branch" };
  const toolparam = { grpKey: "tool" };

  useEffect(() => {
    getBranchesData(branchparam);
    getToolList(toolparam);
    dispatch(toolListAction());
    dispatch(totalResourceAction());
    dispatch(combinedDataAction());
    setBtnActive("team");
    showTeamData();
  }, []);

  // useEffect(()=>{
  //   const teamWiseChart = toolList.datas.map((n) => n.root_value);
  //   teamWiseChart.forEach((tname, i) => {
  //     if (i > 10) return;
  //     let teamParam = { rootValue: tname, grpKey: "team" };
  //     dispatch(toolWiseTeamAction(teamParam));
  //   });
  //   setTeamDatas(toolWiseTeam);
  // });
  const showTeamData = () => {
    setBtnActive("team");
  };
  const showProductData = () => {
    setBtnActive("tool");
  };
  if (
    branchesList == null ||
    branchesList == undefined ||
    branchesList.datas.length === 0
  ) {
    return;
  }
// console.log('toolWiseTeam',teamDatas);
  return (
    <div className="dashboardPage">
      <h1 className="dashboardPage__heading">Dashborad | Data Graph</h1>
      <Col>
        <CardInformation />
        <Row>
          <Col xl="7" xs="12">
            <Card>
              <Card.Header>
                <h5>Total Euroland</h5>
              </Card.Header>
              <Card.Body>
                {monthWiseData && (
                  <ChartCreate
                    chartTYpe={"bar"}
                    xaxisData={monthWiseData[0].months}
                    xaxisTitleColor={chartColor.palette2.color3}
                    yaxisTitleColor={chartColor.palette2.color3}
                    themeColor={chartColor.palette2.color3}
                  />
                )}
              </Card.Body>
            </Card>
          </Col>
          <Col xl="5" xs="12">
            <Card>
              <Card.Body>
                {toolList && (
                  <ChartCreate
                    chartTYpe={"area"}
                    xaxisData={toolList.datas}
                    xaxisTitleColor={chartColor.palette10.color2}
                    yaxisTitleColor={chartColor.palette10.color2}
                    themeColor={chartColor.palette10.color2}
                  />
                )}
              </Card.Body>
              <Card.Footer className="chart-footer">
                <h6 className="text-muted m-b-30 m-t-15">
                  Actual Hours and Estimated Hours
                </h6>
                <Row>
                  <Col xs="6" className="b-r-default">
                    <h6 className="text-muted m-b-10">Actual Hours</h6>
                    <h4 className="m-b-0 f-w-600 ">211</h4>
                  </Col>
                  <Col xs="6">
                    <h6 className="text-muted m-b-10">Estimated Hours</h6>
                    <h4 className="m-b-0 f-w-600 ">152</h4>
                  </Col>
                </Row>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
        <Row>
          <div className="pieDonutChart-box col-12">
            <div className="card">
              <div className="select-option">
                <button
                  className={
                    btnActive == "team" ? "showTeamData active" : "showTeamData"
                  }
                  onClick={showTeamData}
                >
                  Team List
                </button>
                <button
                  className={
                    btnActive == "tool" ? "showTeamData active" : "showTeamData"
                  }
                  onClick={showProductData}
                >
                  Product List
                </button>
              </div>
              {btnActive === "team" && branchesList && (
                <Row className="chart-row">
                  <BranchChart
                    showData={branchesList.datas}
                    name={btnActive == "team" ? "All Branch" : "All Product"}
                    grpKey={btnActive}
                  />
                  <TeamChart showData={teamDatas} grpKey={btnActive} />
                </Row>
              )}
              {btnActive === "tool" && toolList && toolandTeam > 0 && (
                <Row className="chart-row">
                  <BranchChart
                    showData={toolandTeam.datas}
                    name={btnActive == "team" ? "All Branch" : "All Product"}
                    grpKey={btnActive}
                  />
                  <TeamChart showData={toolandTeam.toolWiseTeamDatas} grpKey={btnActive} />
                </Row>
              )}
            </div>
          </div>
        </Row>
      </Col>
    </div>
  );
};

export default Dashboard;
