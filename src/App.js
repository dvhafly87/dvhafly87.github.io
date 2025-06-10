import React from "react";
import './App.css';
import Phone from "../src/imgs/PhoneR.png";
import Mail from "../src/imgs/Mail.png";
import RTY from "../src/imgs/RTY.jpeg";
import RTY2 from "../src/imgs/RTY2.jpeg";
import RTF from "../src/imgs/ReactFolio.jpeg";
import DH from "../src/imgs/DailyHumor.png";
import SH from "../src/imgs/server.png";

function App() {
  return (
   <div className="Main-Container">
      <div className="Title-Containr">
        KMG's WorkSpace
      </div>
      <div className="Phone-Container"> 
        <span>
          <img src={Phone} alt="phone"/>
          </span>
        <span>010-8317-5624</span>
      </div>
      <div className="Mail-Container">
        <span>
          <img src={Mail} alt="mail"/>
        </span>
        <span>dvhafly87@gmail.com</span>
      </div>
      <div className="Server-Container">
        <span>
          <img src={SH} alt="server"/>
        </span>
        <span>
          AM_09:00 - PM_12:00
        </span>
        <span className="Server-ContainerA">
          서버 가동시간 오전 09:00 ~ 오후 12:00
        </span>
      </div>
      <div className="WorkSpace-Container">

        <div className="ProjectNum1">
          <img className="ProjectIMG" src={RTY} alt="RTY"/>
          <div className="ProjectTT">
            Recipe to You
          </div>
          <div className="ProjectDT">
            2025.01 - 2025.03
          </div>
          <div className="ProjectLNK">
            <a href="https://www.notion.so/UNGUNG-181fce5118d380688db9eebc7bcd8072">Notion</a><br/>
            <a href="https://github.com/hojunhojun/Soldesk_FinalProject" >Repository</a>
          </div>
          <div className="ProjectTM">
            4인 팀 프로젝트
          </div>
          <div className="ProjectCM">
            사용자가 레시피를 제공받고 커뮤니티 기능을 통해 다른 사람들과 소통하며, 나아가 마켓에서 재료를 구매할 수 있는 일관된 사용자 경험(UX) 중심의 웹페이지
          </div>
        </div>

        <div className="ProjectNum1">
          <img className="ProjectIMG" src={RTY2} alt="RTY"/>
          <div className="ProjectTT">
            Recipe to YouV2
          </div>
          <div className="ProjectDT">
            2025.04 - 
          </div>
          <div className="ProjectLNK">
            <a href="http://dvhafly87.kmgproj.p-e.kr:8887">링크</a><br/>
             <a href="">개발문서</a>
          </div>
          <div className="ProjectTM">
            개인 프로젝트
          </div>
          <div className="ProjectCM">
            기존 팀 프로젝트를 복구하는 과정에서 처음부터 다시만들어보자 해서 진행하게 된 프로젝트
          </div>
        </div>

        <div className="ProjectNum1">
          <img className="ProjectIMG" src={RTF} alt="RTY"/>
          <div className="ProjectTT">
            ReactFolio
          </div>
          <div className="ProjectDT">
            2024.11.03 - 2024.11.05
          </div>
          <div className="ProjectLNK">
            <a href="https://dvhafly87.github.io/folio">링크</a><br/>
             <a href="">개발문서</a>
          </div>
          <div className="ProjectTM">
            개인 프로젝트
          </div>
          <div className="ProjectCM">
            리액트를 개발 환경 구축 당시에 기초적으로 만들어본 웹 포트폴리오 프로젝트
          </div>
        </div>

         <div className="ProjectNum1">
          <img className="ProjectIMG" src={DH} alt="RTY"/>
          <div className="ProjectTT">
            DailyHumor
          </div>
          <div className="ProjectDT">
            2024.10.20
          </div>
          <div className="ProjectLNK">
            <a href="http://dvhafly87.kmgproj.p-e.kr:3400">링크</a><br/>
             <a href="" disable>개발문서</a>
          </div>
          <div className="ProjectTM">
            개인 프로젝트
          </div>
          <div className="ProjectCM">
            이상한 API가 있어 만들어본 랜덤으로 이상한 무작위 개그가 나오는 프로젝트
          </div>
        </div>

      </div>
   </div>
  );
}

export default App;
