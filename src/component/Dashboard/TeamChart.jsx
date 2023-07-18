import React, { Fragment } from "react";
import { Col, Card } from "react-bootstrap";
import PieDonutChart from "./PieDonutChart";
// import { useDispatch, useSelector } from "react-redux";
// import useToolWiseTeam from "@hooks/useToolWiseTeam";
// import { toolWiseTeamAction } from "src/actions/toolWiseTeamAction";

const TeamChart = ({ showData, grpKey }) => {
  // const datasBranch = showData ? showData : [];
  // const [teamDatas, setTeamDatas] = useState([]);
  // const teamWiseChart = datasBranch.map((n) => n.root_value);
  // const toolWiseTeam = useSelector((state) => state.toolWiseTeam.toolTeamDatas);

  // let teamArray = [];
  // const dispatch = useDispatch();
  // let teamParam;

  // useEffect(() => {
  //   teamWiseChart.forEach((tname, i) => {
  //     if (grpKey == "tool") {
  //       if (i > 10) return;
  //       teamParam = { rootValue: tname, grpKey: "team" };
  //       dispatch(toolWiseTeamAction(teamParam));
  //     } else if (grpKey == "team") {
  //       const paramTeam = {
  //         root_name: "tool",
  //         root_value: grpKey == "tool" ? tname : "",
  //         grp_key: "team",
  //         parent: {
  //           root_name: "member",
  //           root_value: "",
  //           parent: {
  //             root_name: "team",
  //             root_value: "",
  //             parent: {
  //               root_name: "branch",
  //               root_value: grpKey == "team" ? tname : "",
  //             },
  //           },
  //         },
  //       };
  //       getTableDatas(dispatch, paramTeam).then((res) => {
  //         if (res) {
  //           teamArray.push({ root_value: tname, teams: res });
  //           setTeamDatas([
  //             ...new Set(teamArray),
  //             { root_value: tname, teams: res },
  //           ]);
  //         }
  //       });
  //     }
  //   });
  //   setTeamDatas(toolWiseTeam);
  // }, [datasBranch]);
  // const uniqueArray = Array.from(new Set(teamDatas.map(JSON.stringify))).map(
  //   JSON.parse
  // );

  
  // console.log('showData',showData);
  return (
    <Fragment>
      { showData.length > 1 &&
        showData.map((pichart, i) => {
          let palette = `palette${i ? i + 1 : 1}`;
          console.log('Teamchart',pichart);
  
          return (
            <Col xl="4" xs="12" key={i}>
              <Card>
                <Card.Body>
                  <PieDonutChart
                    datasBranch={pichart.teams}
                    nameBranch={pichart.root_value}
                    colorValue={palette}
                    chartType={"pie"}
                    grpKey={grpKey}
                  />
                </Card.Body>
              </Card>
            </Col>
          );
        })}
    </Fragment>
  );
};

export default TeamChart;
