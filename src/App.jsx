import React, { useState } from "react";
import { data } from "./Constants/dataConfig";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import "./style.css";
import "./App.css";
const App = () => {
  const [Active, setActive] = useState(1);

  const typewriter = (string,delay,pause,del) => {
    return (
      <Typewriter
        options={{
          strings: string,
          autoStart: true,
          loop: true,
          pauseFor: pause,
          delay: delay,
          cursor: "",
          deleteSpeed: del, 
        }}
      />
    );
  };

  const handlehover = (id) => {
    if (id === Active) {
      return;
    }
    setActive(id);
  };

  const handlemouseleave = () => {
    if (Active === 1) {
      return;
    }
    setActive(1);
  };

  return (
    <div className="appcontainer">
      <div className="leftcontainer">
        <div className="heading">
          <div className="headings">{typewriter("Watch.",100,3000,100)}</div>
          <div className="headings">{typewriter("Learn.",100,3000,120)}</div>
          <div className="headings">{typewriter("Grow.",110,3000,140)}</div>
        </div>
        <Searchwrapper>
          <Searchbar placeholder="Find your passion" />
          <Searchbutton>Go</Searchbutton>
        </Searchwrapper>
      </div>

      <div className="rightcontainer">
        {data.map((e) => {
          return (
            <Itemcontainer
              key={e.id}
              onMouseOver={() => handlehover(e.id)}
              onMouseLeave={() => handlemouseleave()}
              isActive={Active === e.id}
            >
              <Itemwrapper>
                <Item style={{ backgroundImage: `url(${e.url})` }}>
                  <Topiccontainer
                    isActive={Active === e.id}
                    isFirst={e.id === 1}
                  >
                    <Topicname>{e.name}</Topicname>
                    <Topiclist>
                      {e.topicList}
                      <Topic>Topics</Topic>
                    </Topiclist>
                  </Topiccontainer>

                  <Boxcontainer isActive={Active === e.id} isFirst={e.id === 1}>
                    <Shortname>
                      <Shortname1>{e.shortName}</Shortname1>
                    </Shortname>
                  </Boxcontainer>
                </Item>
              </Itemwrapper>
            </Itemcontainer>
          );
        })}
      </div>
    </div>
  );
};

export default App;

const Searchwrapper = styled.div`
  position: absolute;
  bottom: 10vh;
  left: 4vw;
  width: 480px;
  height: 120px;
  padding-left: 40px;
  display: flex;
  z-index: 1;
  align-items: stretch;
`;

const Searchbar = styled.input`
  flex: 1;
  font-family: "Archia";
  position: relative;
  width: 100%;
  height: 100%;
  padding-left: 40px;
  font-size: 20px;
  outline: none;
  border: 1px solid white;
  box-shadow: 10px 20px 50px 0px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.4s ease, border 0.1s ease;

  &:hover {
    box-shadow: 0px 49px 51px 0px rgba(0, 0, 0, 0.2);
  }
  &:focus-visible {
    box-shadow: 0px 49px 51px 0px rgba(0, 0, 0, 0.2);
    border-color: lightgreen;
    &::placeholder {
      opacity: 0.5;
    }
  }
`;

const Searchbutton = styled.button`
  outline: none;
  border: none;
  width: 120px;
  font-size: 30px;
  font-weight: 600;
  font-family: "Archia";
  cursor: pointer;
  background: linear-gradient(to top, #97c680 50%, #feba88 50%);
  background-size: 100% 200%;
  background-position-y: -100%;

  transition: background-position 0.4s ease;

  &:hover {
    background-position-y: 0%;
  }
`;

const Itemcontainer = styled.div`
  min-width: 100px;
  /* border: 1px solid yellow; */
  flex: ${({ isActive }) => (isActive ? "3" : "1")};
  padding: 0 15px;
  transition: all 0.4s ease;
`;

const Itemwrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Item = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-size: auto ${({ isActive }) => (isActive ? "120%" : "100%")};
  background-position: top;
  border-radius: 20px;
  padding: 0 30px;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    border-radius: 20px;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 20%;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.6) 30%,
      rgba(0, 0, 0, 0) 100%
    );
  }
`;

const Topiccontainer = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  bottom: 10vh;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 0 30px;
  transition: all 0.4s ease;
  padding-left: ${({ isFirst }) => (isFirst ? "80px" : "30px")};
  opacity: ${({ isActive }) => (isActive ? "1" : "0")};
`;

const Topicname = styled.div`
  width: 10vw;
  font-size: 2.1rem;
  font-weight: 700;
  word-break: keep-all;
`;

const Topiclist = styled.div`
  width: 10vw;
  font-size: 60px;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Topic = styled.div`
  text-transform: uppercase;
  font-weight: 400;
  font-size: 18px;
`;

const Boxcontainer = styled.div`
  position: absolute;
  bottom: 10vh;
  left: 0;
  width: 140px;
  height: 120px;
  background-color: #1e1e2f;
  display: ${({ isFirst }) => (isFirst ? "none" : "block")};
  opacity: ${({ isActive }) => (isActive ? "0" : "1")};
  transition: all 0.5s ease;
`;
const Shortname = styled.div`
  color: white;
  position: absolute;
  bottom: 13vh;
  left: -10%;
`;
const Shortname1 = styled.div`
  font-size: 2.3rem;
  font-weight: 500;
  transform: rotate(-90deg);
`;
