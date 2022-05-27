import { InfoOutlined, PlayArrow, ReplayOutlined } from "@material-ui/icons";
import { useState } from "react";
import "./homeMovie.scss";

const HomeMovie = () => {
  const [isInfo, setIsInfo] = useState(true);
  return (
    <div className="homeMovie">
      <img
        src="https://images.pexels.com/photos/276514/pexels-photo-276514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      />
      <div className="homeMovie__replay">
        <div className="replay_container">
          <ReplayOutlined className="replay_icon" />
        </div>
        <p className="replay__age">16+</p>
      </div>

      {/* Container des infos */}
      <div className="homeMovie__container">
        <div className="homeMovie__title-container">
          <div className="title-container__series">
            <img
              src="https://www.svgrepo.com/show/303341/netflix-1-logo.svg"
              alt=""
            />
            <h3>Série</h3>
          </div>
          <h2 className="title-container__title">Entrevias</h2>
        </div>
        {isInfo && (
          <div className="homeMovie__container-info">
            <div className="container-info__title">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBjbGFzcz0ic3ZnLWljb24gc3ZnLWljb24tdG9wLTEwLWJhZGdlIiBzdHlsZT0iY29sb3I6IHJnYigyMjksIDksIDIwKTsiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMyAyQzIuNDQ3NzIgMiAyIDIuNDQ3NzIgMiAzVjIxQzIgMjEuNTUyMyAyLjQ0NzcyIDIyIDMgMjJIMjFDMjEuNTUyMyAyMiAyMiAyMS41NTIzIDIyIDIxVjNDMjIgMi40NDc3MiAyMS41NTIzIDIgMjEgMkgzWk0xNy4yMjk5IDEwLjg5MzRDMTYuNjEyNSAxMC40OTcxIDE1Ljg5MTMgMTAuMjk5NiAxNS4wNjczIDEwLjI5OTZDMTQuMjQ0NCAxMC4yOTk2IDEzLjUyMzEgMTAuNDk3MSAxMi45MDU2IDEwLjg5MzRDMTIuMjg4MSAxMS4yOTA1IDExLjgxMTQgMTEuODUzNiAxMS40NzYyIDEyLjU4MzlDMTEuMTQxMSAxMy4zMTQ5IDEwLjk3MzUgMTQuMTY5NSAxMC45NzM1IDE1LjE0OTNDMTAuOTczNSAxNi4xMzgzIDExLjE0MTEgMTYuOTk1NyAxMS40NzYyIDE3LjcyMjFDMTEuODExNCAxOC40NDc4IDEyLjI4ODEgMTkuMDA5MSAxMi45MDU2IDE5LjQwNTJDMTMuNTIzMSAxOS44MDE0IDE0LjI0NDQgMjAgMTUuMDY3MyAyMEMxNS44OTEzIDIwIDE2LjYxMjUgMTkuODAxNCAxNy4yMjk5IDE5LjQwNTJDMTcuODQ3NSAxOS4wMDkxIDE4LjMyNDIgMTguNDQ3OCAxOC42NTk0IDE3LjcyMjFDMTguOTk0NSAxNi45OTU3IDE5LjE2MTIgMTYuMTM4MyAxOS4xNjEyIDE1LjE0OTNDMTkuMTYxMiAxNC4xNjk1IDE4Ljk5NDUgMTMuMzE0OSAxOC42NTk0IDEyLjU4MzlDMTguMzI0MiAxMS44NTM2IDE3Ljg0NzUgMTEuMjkwNSAxNy4yMjk5IDEwLjg5MzRaTTkuNDc5MjIgMTkuNzk5NFYxMC4zMjYzTDQuOTI2NTggMTEuNDM1MVYxMy4yNjU2TDcuMjA5OTEgMTIuNjc3NFYxOS43OTk0SDkuNDc5MjJaTTEzLjc2MDYgMTIuOTUxM0MxNC4wNzY3IDEyLjQyOTggMTQuNTExNyAxMi4xNzAxIDE1LjA2NzMgMTIuMTcwMUMxNS42MjM5IDEyLjE3MDEgMTYuMDU4OSAxMi40Mjk4IDE2LjM3NTEgMTIuOTUxM0MxNi42OTEzIDEzLjQ3MTggMTYuODQ4OSAxNC4yMDU4IDE2Ljg0ODkgMTUuMTQ5M0MxNi44NDg5IDE2LjA5MzggMTYuNjkxMyAxNi44MjY4IDE2LjM3NTEgMTcuMzQ3M0MxNi4wNTg5IDE3Ljg2ODggMTUuNjIzOSAxOC4xMjk2IDE1LjA2NzMgMTguMTI5NkMxNC41MTE3IDE4LjEyOTYgMTQuMDc2NyAxNy44Njg4IDEzLjc2MDYgMTcuMzQ3M0MxMy40NDQyIDE2LjgyNjggMTMuMjg2OCAxNi4wOTM4IDEzLjI4NjggMTUuMTQ5M0MxMy4yODY4IDE0LjIwNTggMTMuNDQ0MiAxMy40NzE4IDEzLjc2MDYgMTIuOTUxM1pNMTMuMDczNyA0LjE5OTM5QzEyLjcyODUgNC4wNjY3NyAxMi4zNDg1IDQgMTEuOTM0NCA0QzExLjUxOTQgNCAxMS4xNDA1IDQuMDY2NzcgMTAuNzk1MiA0LjE5OTM5QzEwLjQ1MjEgNC4zMzEyMiAxMC4xNTE4IDQuNTE3NzEgOS44OTg0OCA0Ljc1NjIyQzkuNjQ0MDQgNC45OTM2NyA5LjQ0OTYzIDUuMjczNzkgOS4zMTIgNS41OTM5NkM5LjE3NDM3IDUuOTE1MDQgOS4xMDU1NiA2LjI2Mjk5IDkuMTA1NTYgNi42Mzg3MkM5LjEwNTU2IDcuMDE0NDYgOS4xNzQzNyA3LjM2MjQxIDkuMzEyIDcuNjgzNDlDOS40NDk2MyA4LjAwMzUyIDkuNjQ0MDQgOC4yODI4NiA5Ljg5ODQ4IDguNTIxMzZDMTAuMTUxOCA4Ljc1OTc0IDEwLjQ1MjEgOC45NDUzIDEwLjc5NTIgOS4wNzc5MkMxMS4xNDA1IDkuMjA5NzYgMTEuNTE5NCA5LjI3NzQ1IDExLjkzNDQgOS4yNzc0NUMxMi4zNDg1IDkuMjc3NDUgMTIuNzI4NSA5LjIwOTc2IDEzLjA3MzcgOS4wNzc5MkMxMy40MTY4IDguOTQ1MyAxMy43MTYxIDguNzU5NzQgMTMuOTcwNCA4LjUyMTM2QzE0LjIyMzkgOC4yODI4NiAxNC40MTk0IDguMDAzNTIgMTQuNTU3IDcuNjgzNDlDMTQuNjk0NyA3LjM2MjQxIDE0Ljc2MzUgNy4wMTQ0NiAxNC43NjM1IDYuNjM4NzJDMTQuNzYzNSA2LjI2Mjk5IDE0LjY5NDcgNS45MTUwNCAxNC41NTcgNS41OTM5NkMxNC40MTk0IDUuMjczNzkgMTQuMjIzOSA0Ljk5MzY3IDEzLjk3MDQgNC43NTYyMkMxMy43MTYxIDQuNTE3NzEgMTMuNDE2OCA0LjMzMTIyIDEzLjA3MzcgNC4xOTkzOVpNOC43NTUyNiA1LjMwODY5VjQuMTIyODhINFY1LjMwODY5SDUuNjM4OTRWOS4xNTQ1N0g3LjExNjMyVjUuMzA4NjlIOC43NTUyNlpNMTguOTkwNCA0LjM0NjlDMTguNjY4MyA0LjE5ODQ3IDE4LjI4OTMgNC4xMjMyNyAxNy44NDg0IDQuMTIzMjdIMTUuNTEwMVY5LjE1MzkySDE2Ljk4NTVWNy43MDgzOEgxNy44NDg0QzE4LjI4OTMgNy43MDgzOCAxOC42NjgzIDcuNjMzMTggMTguOTkwNCA3LjQ4Mzg0QzE5LjMxMTcgNy4zMzU0MSAxOS41NjAxIDcuMTI0ODMgMTkuNzM2NiA2Ljg1NDg0QzE5LjkxMzIgNi41ODU3OCAyMCA2LjI2OTMxIDIwIDUuOTA4NDVDMjAgNS41NTY4MiAxOS45MTMyIDUuMjQ1ODcgMTkuNzM2NiA0Ljk3NjAyQzE5LjU2MDEgNC43MDY4MyAxOS4zMTE3IDQuNDk2MjQgMTguOTkwNCA0LjM0NjlaTTExLjIzOTIgNS4zOTE2NkMxMS40Mzg3IDUuMjczNzkgMTEuNjcwMSA1LjIxNTQ1IDExLjkzNDQgNS4yMTU0NUMxMi4xOTg4IDUuMjE1NDUgMTIuNDMwMiA1LjI3Mzc5IDEyLjYyOTcgNS4zOTE2NkMxMi44MjkyIDUuNTA5NTQgMTIuOTg0OSA1LjY3NjUzIDEzLjA5NTUgNS44OTAwMUMxMy4yMDcyIDYuMTA1MjEgMTMuMjYzMiA2LjM1Mzg2IDEzLjI2MzIgNi42Mzg3MkMxMy4yNjMyIDYuOTIyNjcgMTMuMjA3MiA3LjE3MjI0IDEzLjA5NTUgNy4zODY1MUMxMi45ODQ5IDcuNjAwOTIgMTIuODI5MiA3Ljc2NzkxIDEyLjYyOTcgNy44ODU2NUMxMi40MzAyIDguMDAzNTIgMTIuMTk4OCA4LjA2MiAxMS45MzQ0IDguMDYyQzExLjY3MDEgOC4wNjIgMTEuNDM4NyA4LjAwMzUyIDExLjIzOTIgNy44ODU2NUMxMS4wMzk3IDcuNzY3OTEgMTAuODg0MSA3LjYwMDkyIDEwLjc3MjQgNy4zODY1MUMxMC42NjE3IDcuMTcyMjQgMTAuNjA1NyA2LjkyMjY3IDEwLjYwNTcgNi42Mzg3MkMxMC42MDU3IDYuMzUzODYgMTAuNjYxNyA2LjEwNTIxIDEwLjc3MjQgNS44OTAwMUMxMC44ODQxIDUuNjc2NTMgMTEuMDM5NyA1LjUwOTU0IDExLjIzOTIgNS4zOTE2NlpNMTYuOTg1NSA1LjI3MTk1SDE3LjYxNDlDMTcuOTI1MiA1LjI3MTk1IDE4LjE1MTUgNS4zMjg0NSAxOC4yOTEzIDUuNDM4OTVDMTguNDMwOSA1LjU0OTMxIDE4LjUwMTcgNS43MDYxNiAxOC41MDE3IDUuOTA4NDVDMTguNTAxNyA2LjExNTM1IDE4LjQzMDkgNi4yNzU4OSAxOC4yOTEzIDYuMzg5MDJDMTguMTUxNSA2LjUwMjI4IDE3LjkyNTIgNi41NTg3OCAxNy42MTQ5IDYuNTU4NzhIMTYuOTg1NVY1LjI3MTk1WiIgZmlsbD0iY3VycmVudENvbG9yIi8+PC9zdmc+"
                alt=""
              />
              <h3> N°1 des séries Tv aujourd'hui</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
              nam dolorum molestiae animi maxime officia possimus quasi error
              beatae maiores debitis dolores. Commodi omnis magni officia quos
              consectetur perspiciatis provident pariatur amet inventore nobis
              doloremque animi tempore quasi enim iure perferendis in
              consequuntur, maxime itaque.
            </p>
          </div>
        )}
        <div className="homeMovie__buttons-container">
          <button className="homeMovie__button">
            <PlayArrow className="homeMovie__icon" />
            <p>Lecture</p>
          </button>
          <button className="homeMovie__button">
            <InfoOutlined className="homeMovie__icon" />
            <p>Plus d'infos</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeMovie;
