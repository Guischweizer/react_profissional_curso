import React from "react";
import {
    Dashboard,
    DashboardMenu,
    DashboardButton
} from "../../components/index";

const HomePage = () => (
    <Dashboard>
        <DashboardMenu title="Jogo da Memória">
            <DashboardButton to="/game">Iniciar Jogo</DashboardButton>
        </DashboardMenu>
    </Dashboard>
);

export default HomePage;
