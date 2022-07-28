import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Icon from "../components/Icon/Icon-component.tsx";
import Stack from "../components/Stack/Stack-component.tsx";
import Box from "../components/Box/Box-component.tsx";
import { formatNumber } from "../helpers/format-helper.ts";
import { useCompetitionsData } from "../hooks/useCompetitionsData.ts";
import Matches from "../components/Matches/Matches-component.tsx";

function normalizeData(data) {
  let output: any = [];

  if (data) {
    data.forEach((item) => {
      let insertedItemIndex = output.findIndex((element) => {
        return (
          dayjs(element?.date).format("D MMMM YY") ===
          dayjs(item?.fixture.date).format("D MMMM YY")
        );
      });

      if (insertedItemIndex >= 0) {
        output[insertedItemIndex].data.push(item);
      } else {
        output.push({
          date: item.fixture.date,
          data: [item],
        });
      }
    });
  }
  return output;
  // return output.sort((a, b) => {
  //   let a_date = a.date;
  //   let b_date = b.date;

  //   if (a_date === b_date) {
  //     return 0;
  //   }
  //   return dayjs(a_date).isBefore(dayjs(b_date)) ? 1 : -1;
  // });
}

function leagues(data) {
  let output: any = [];

  if (data) {
    data.forEach((item) => {
      let insertedItemIndex = output.findIndex((element) => {
        return element?.league === item?.league.name;
      });

      if (insertedItemIndex >= 0) {
        output[insertedItemIndex].data.push(item);
      } else {
        output.push({
          league: item.league.name,
          logo: item.league.logo,
          homeTeam: {
            name: item.teams.home.name,
            logo: item.teams.home.logo,
          },
          awayTeam: {
            name: item.teams.away.name,
            logo: item.teams.away.logo,
          },
          time: item.fixture.timestamp,
        });
      }
    });
  }

  return output;
}

function Competitions() {
  let { retrieveCompetitionsData, data } = useCompetitionsData();
  let [selectedDay, setSelectedDay] = useState<string>();

  useEffect(() => {
    retrieveCompetitionsData();
  }, []);

  let datanew = normalizeData(data);

  console.log({ datanew });
  return (
    <>
      <Helmet>
        <title>مسابقات</title>
      </Helmet>
      <Stack distribution="space-between" alignment="center">
        <Icon name="FiClock" color="#000000" />
        <p>نتایج زنده</p>
      </Stack>
      <Box>
        {!!datanew
          ? datanew.map((item, index) => {
              return (
                <>
                  <button
                    key={index}
                    onClick={() => {
                      setSelectedDay(item.date);
                    }}
                    style={{
                      cursor: "pointer",
                      backgroundColor: "#fff",
                      border: "none",
                    }}
                  >
                    <p>{formatNumber(dayjs(item.date).format("DD MMMM"))}</p>
                  </button>
                  <Stack bg="yellow">
                    {selectedDay === item.date
                      ? leagues(item.data).map((i) => {
                          return (
                            <Matches
                              leagueTitle={i.league}
                              logo={i.logo}
                              homeTeam={{
                                name: i.homeTeam.name,
                                logo: i.homeTeam.logo,
                              }}
                              awayTeam={{
                                name: i.awayTeam.name,
                                logo: i.awayTeam.logo,
                              }}
                              time={i.time}
                            />
                          );
                        })
                      : null}
                  </Stack>
                </>
              );
            })
          : null}
      </Box>
    </>
  );
}

export default Competitions;
