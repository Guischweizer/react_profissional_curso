import React from "react";
import { connect } from "react-redux";
import { Board, Card } from "../../components";

const GamePage = ({ isActive, handleClick }) => (
    <Board>
        <Card name="Teste card" isActive={isActive} onClick={handleClick} />
    </Board>
);

const mapStateToProps = state => ({
    isActive: state.isActive
});
const mapDispatchToProps = dispatch => ({
    handleClick: () => {
        dispatch({ type: "SELECT_CARD" });
    }
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GamePage);
