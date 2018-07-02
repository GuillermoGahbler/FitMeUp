import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import CalorieBarChart from "./CalorieBarChart";
import MacroPieChart from "./MacroPieChart";

class WeeklyCharts extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col size="md-3">
                        <h3>This week:</h3>
                        <p>Daily calorie target: 2200</p>
                        <p>Average daily calories: 2230</p>
                        <CalorieBarChart />
                        <MacroPieChart />
                    </Col>
                </Row>

            </Container>
        );
    }
}
export default WeeklyCharts;