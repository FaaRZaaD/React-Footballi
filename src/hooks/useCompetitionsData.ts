import axios from "axios";
import { useState } from "react";
import { CompetitionsDataType } from "../types/server.ts";

export function useCompetitionsData() {
  let [data, setData] = useState<CompetitionsDataType[]>();
  let [loading, setLoading] = useState(false);
  let [hasError, setHasError] = useState(null);
  function retrieveCompetitionsData() {
    setLoading(true);
    setHasError(null);
    return axios
      .get("https://v3.football.api-sports.io/fixtures?live=all", {
        headers: {
          "x-rapidapi-host": "v3.football.api-sports.io",
          "x-rapidapi-key": "7a20885e9d384251a90781167ac7a27c",
        },
      })
      .then((response) => {
        setData([
          {
            events: [],
            fixture: {
              date: "2022-07-28T16:00:00+00:00",
              id: 867246,
              periods: {
                first: 1659024000,
                second: null,
              },
              referee: "Chrysovalantis Theouli, Cyprus",
              status: {
                elapsed: 1,
                long: "First Half",
                short: "1H",
              },
              timestamp: 1659024000,
              timezone: "UTC",
              venue: {
                city: "Kisvárda",
                id: 816,
                name: "Várkerti Stadion",
              },
            },
            goals: { home: 0, away: 0 },
            league: {
              country: "World",
              flag: null,
              id: 848,
              logo: "https://media.api-sports.io/football/leagues/848.png",
              name: "لیگ کنفرانس اروپا",
              round: "2nd Qualifying Round",
              season: 2022,
            },
            score: {
              extratime: { home: null, away: null },
              fulltime: { home: null, away: null },
              halftime: { home: 0, away: 0 },
              penalty: { home: null, away: null },
            },
            teams: {
              away: {
                id: 664,
                name: "کایرات آلماتی",
                logo: "https://media.api-sports.io/football/teams/664.png",
                winner: null,
              },
              home: {
                id: 2394,
                name: "اف‌سی کیسواردا",
                logo: "https://media.api-sports.io/football/teams/2394.png",
                winner: null,
              },
            },
          },
          {
            events: [],
            fixture: {
              date: "2022-07-28T16:00:00+00:00",
              id: 867246,
              periods: {
                first: 1659024000,
                second: null,
              },
              referee: "Chrysovalantis Theouli, Cyprus",
              status: {
                elapsed: 1,
                long: "First Half",
                short: "1H",
              },
              timestamp: 1659024000,
              timezone: "UTC",
              venue: {
                city: "Kisvárda",
                id: 816,
                name: "Várkerti Stadion",
              },
            },
            goals: { home: 0, away: 0 },
            league: {
              country: "World",
              flag: null,
              id: 848,
              logo: "https://media.api-sports.io/football/leagues/848.png",
              name: "لیگ اروپا",
              round: "2nd Qualifying Round",
              season: 2022,
            },
            score: {
              extratime: { home: null, away: null },
              fulltime: { home: null, away: null },
              halftime: { home: 0, away: 0 },
              penalty: { home: null, away: null },
            },
            teams: {
              away: {
                id: 664,
                name: "کایرات آلماتی",
                logo: "https://media.api-sports.io/football/teams/664.png",
                winner: null,
              },
              home: {
                id: 2394,
                name: "اف‌سی کیسواردا",
                logo: "https://media.api-sports.io/football/teams/2394.png",
                winner: null,
              },
            },
          },
          {
            events: [],
            fixture: {
              date: "2022-07-28T16:00:00+00:00",
              id: 867246,
              periods: {
                first: 1659024000,
                second: null,
              },
              referee: "Chrysovalantis Theouli, Cyprus",
              status: {
                elapsed: 1,
                long: "First Half",
                short: "1H",
              },
              timestamp: 1659024000,
              timezone: "UTC",
              venue: {
                city: "Kisvárda",
                id: 816,
                name: "Várkerti Stadion",
              },
            },
            goals: { home: 0, away: 0 },
            league: {
              country: "World",
              flag: null,
              id: 848,
              logo: "https://media.api-sports.io/football/leagues/848.png",
              name: "لیگ کنفرانس اروپا",
              round: "2nd Qualifying Round",
              season: 2022,
            },
            score: {
              extratime: { home: null, away: null },
              fulltime: { home: null, away: null },
              halftime: { home: 0, away: 0 },
              penalty: { home: null, away: null },
            },
            teams: {
              away: {
                id: 664,
                name: "کایرات آلماتی",
                logo: "https://media.api-sports.io/football/teams/664.png",
                winner: null,
              },
              home: {
                id: 2394,
                name: "اف‌سی کیسواردا",
                logo: "https://media.api-sports.io/football/teams/2394.png",
                winner: null,
              },
            },
          },
          {
            events: [],
            fixture: {
              date: "2022-07-28T16:00:00+00:00",
              id: 867246,
              periods: {
                first: 1659024000,
                second: null,
              },
              referee: "Chrysovalantis Theouli, Cyprus",
              status: {
                elapsed: 1,
                long: "First Half",
                short: "1H",
              },
              timestamp: 1659024000,
              timezone: "UTC",
              venue: {
                city: "Kisvárda",
                id: 816,
                name: "Várkerti Stadion",
              },
            },
            goals: { home: 0, away: 0 },
            league: {
              country: "World",
              flag: null,
              id: 848,
              logo: "https://media.api-sports.io/football/leagues/848.png",
              name: "لیگ کنفرانس اروپا",
              round: "2nd Qualifying Round",
              season: 2022,
            },
            score: {
              extratime: { home: null, away: null },
              fulltime: { home: null, away: null },
              halftime: { home: 0, away: 0 },
              penalty: { home: null, away: null },
            },
            teams: {
              away: {
                id: 664,
                name: "کایرات آلماتی",
                logo: "https://media.api-sports.io/football/teams/664.png",
                winner: null,
              },
              home: {
                id: 2394,
                name: "اف‌سی کیسواردا",
                logo: "https://media.api-sports.io/football/teams/2394.png",
                winner: null,
              },
            },
          },
          {
            events: [],
            fixture: {
              date: "2022-07-28T16:00:00+00:00",
              id: 867246,
              periods: {
                first: 1659024000,
                second: null,
              },
              referee: "Chrysovalantis Theouli, Cyprus",
              status: {
                elapsed: 1,
                long: "First Half",
                short: "1H",
              },
              timestamp: 1659024000,
              timezone: "UTC",
              venue: {
                city: "Kisvárda",
                id: 816,
                name: "Várkerti Stadion",
              },
            },
            goals: { home: 0, away: 0 },
            league: {
              country: "World",
              flag: null,
              id: 848,
              logo: "https://media.api-sports.io/football/leagues/848.png",
              name: "لیگ اروپا",
              round: "2nd Qualifying Round",
              season: 2022,
            },
            score: {
              extratime: { home: null, away: null },
              fulltime: { home: null, away: null },
              halftime: { home: 0, away: 0 },
              penalty: { home: null, away: null },
            },
            teams: {
              away: {
                id: 664,
                name: "کایرات آلماتی",
                logo: "https://media.api-sports.io/football/teams/664.png",
                winner: null,
              },
              home: {
                id: 2394,
                name: "اف‌سی کیسواردا",
                logo: "https://media.api-sports.io/football/teams/2394.png",
                winner: null,
              },
            },
          },
          {
            events: [],
            fixture: {
              date: "2022-07-28T16:00:00+00:00",
              id: 867246,
              periods: {
                first: 1659024000,
                second: null,
              },
              referee: "Chrysovalantis Theouli, Cyprus",
              status: {
                elapsed: 1,
                long: "First Half",
                short: "1H",
              },
              timestamp: 1659024000,
              timezone: "UTC",
              venue: {
                city: "Kisvárda",
                id: 816,
                name: "Várkerti Stadion",
              },
            },
            goals: { home: 0, away: 0 },
            league: {
              country: "World",
              flag: null,
              id: 848,
              logo: "https://media.api-sports.io/football/leagues/848.png",
              name: "لیگ کنفرانس اروپا",
              round: "2nd Qualifying Round",
              season: 2022,
            },
            score: {
              extratime: { home: null, away: null },
              fulltime: { home: null, away: null },
              halftime: { home: 0, away: 0 },
              penalty: { home: null, away: null },
            },
            teams: {
              away: {
                id: 664,
                name: "کایرات آلماتی",
                logo: "https://media.api-sports.io/football/teams/664.png",
                winner: null,
              },
              home: {
                id: 2394,
                name: "اف‌سی کیسواردا",
                logo: "https://media.api-sports.io/football/teams/2394.png",
                winner: null,
              },
            },
          },
          {
            events: [],
            fixture: {
              date: "2022-07-28T16:00:00+00:00",
              id: 867246,
              periods: {
                first: 1659024000,
                second: null,
              },
              referee: "Chrysovalantis Theouli, Cyprus",
              status: {
                elapsed: 1,
                long: "First Half",
                short: "1H",
              },
              timestamp: 1659024000,
              timezone: "UTC",
              venue: {
                city: "Kisvárda",
                id: 816,
                name: "Várkerti Stadion",
              },
            },
            goals: { home: 0, away: 0 },
            league: {
              country: "World",
              flag: null,
              id: 848,
              logo: "https://media.api-sports.io/football/leagues/848.png",
              name: "لیگ کنفرانس اروپا",
              round: "2nd Qualifying Round",
              season: 2022,
            },
            score: {
              extratime: { home: null, away: null },
              fulltime: { home: null, away: null },
              halftime: { home: 0, away: 0 },
              penalty: { home: null, away: null },
            },
            teams: {
              away: {
                id: 664,
                name: "کایرات آلماتی",
                logo: "https://media.api-sports.io/football/teams/664.png",
                winner: null,
              },
              home: {
                id: 2394,
                name: "اف‌سی کیسواردا",
                logo: "https://media.api-sports.io/football/teams/2394.png",
                winner: null,
              },
            },
          },
          {
            events: [],
            fixture: {
              date: "2022-07-28T16:00:00+00:00",
              id: 867246,
              periods: {
                first: 1659024000,
                second: null,
              },
              referee: "Chrysovalantis Theouli, Cyprus",
              status: {
                elapsed: 1,
                long: "First Half",
                short: "1H",
              },
              timestamp: 1659024000,
              timezone: "UTC",
              venue: {
                city: "Kisvárda",
                id: 816,
                name: "Várkerti Stadion",
              },
            },
            goals: { home: 0, away: 0 },
            league: {
              country: "World",
              flag: null,
              id: 848,
              logo: "https://media.api-sports.io/football/leagues/848.png",
              name: "لیگ اروپا",
              round: "2nd Qualifying Round",
              season: 2022,
            },
            score: {
              extratime: { home: null, away: null },
              fulltime: { home: null, away: null },
              halftime: { home: 0, away: 0 },
              penalty: { home: null, away: null },
            },
            teams: {
              away: {
                id: 664,
                name: "کایرات آلماتی",
                logo: "https://media.api-sports.io/football/teams/664.png",
                winner: null,
              },
              home: {
                id: 2394,
                name: "اف‌سی کیسواردا",
                logo: "https://media.api-sports.io/football/teams/2394.png",
                winner: null,
              },
            },
          },
          {
            events: [],
            fixture: {
              date: "2022-07-28T16:00:00+00:00",
              id: 867246,
              periods: {
                first: 1659024000,
                second: null,
              },
              referee: "Chrysovalantis Theouli, Cyprus",
              status: {
                elapsed: 1,
                long: "First Half",
                short: "1H",
              },
              timestamp: 1659024000,
              timezone: "UTC",
              venue: {
                city: "Kisvárda",
                id: 816,
                name: "Várkerti Stadion",
              },
            },
            goals: { home: 0, away: 0 },
            league: {
              country: "World",
              flag: null,
              id: 848,
              logo: "https://media.api-sports.io/football/leagues/848.png",
              name: "لیگ کنفرانس اروپا",
              round: "2nd Qualifying Round",
              season: 2022,
            },
            score: {
              extratime: { home: null, away: null },
              fulltime: { home: null, away: null },
              halftime: { home: 0, away: 0 },
              penalty: { home: null, away: null },
            },
            teams: {
              away: {
                id: 664,
                name: "کایرات آلماتی",
                logo: "https://media.api-sports.io/football/teams/664.png",
                winner: null,
              },
              home: {
                id: 2394,
                name: "اف‌سی کیسواردا",
                logo: "https://media.api-sports.io/football/teams/2394.png",
                winner: null,
              },
            },
          },
          {
            events: [],
            fixture: {
              date: "2022-07-28T16:00:00+00:00",
              id: 867246,
              periods: {
                first: 1659024000,
                second: null,
              },
              referee: "Chrysovalantis Theouli, Cyprus",
              status: {
                elapsed: 1,
                long: "First Half",
                short: "1H",
              },
              timestamp: 1659024000,
              timezone: "UTC",
              venue: {
                city: "Kisvárda",
                id: 816,
                name: "Várkerti Stadion",
              },
            },
            goals: { home: 0, away: 0 },
            league: {
              country: "World",
              flag: null,
              id: 848,
              logo: "https://media.api-sports.io/football/leagues/848.png",
              name: "لیگ کنفرانس اروپا",
              round: "2nd Qualifying Round",
              season: 2022,
            },
            score: {
              extratime: { home: null, away: null },
              fulltime: { home: null, away: null },
              halftime: { home: 0, away: 0 },
              penalty: { home: null, away: null },
            },
            teams: {
              away: {
                id: 664,
                name: "کایرات آلماتی",
                logo: "https://media.api-sports.io/football/teams/664.png",
                winner: null,
              },
              home: {
                id: 2394,
                name: "اف‌سی کیسواردا",
                logo: "https://media.api-sports.io/football/teams/2394.png",
                winner: null,
              },
            },
          },
          {
            events: [],
            fixture: {
              date: "2022-07-28T16:00:00+00:00",
              id: 867246,
              periods: {
                first: 1659024000,
                second: null,
              },
              referee: "Chrysovalantis Theouli, Cyprus",
              status: {
                elapsed: 1,
                long: "First Half",
                short: "1H",
              },
              timestamp: 1659024000,
              timezone: "UTC",
              venue: {
                city: "Kisvárda",
                id: 816,
                name: "Várkerti Stadion",
              },
            },
            goals: { home: 0, away: 0 },
            league: {
              country: "World",
              flag: null,
              id: 848,
              logo: "https://media.api-sports.io/football/leagues/848.png",
              name: "لیگ اروپا",
              round: "2nd Qualifying Round",
              season: 2022,
            },
            score: {
              extratime: { home: null, away: null },
              fulltime: { home: null, away: null },
              halftime: { home: 0, away: 0 },
              penalty: { home: null, away: null },
            },
            teams: {
              away: {
                id: 664,
                name: "کایرات آلماتی",
                logo: "https://media.api-sports.io/football/teams/664.png",
                winner: null,
              },
              home: {
                id: 2394,
                name: "اف‌سی کیسواردا",
                logo: "https://media.api-sports.io/football/teams/2394.png",
                winner: null,
              },
            },
          },
          {
            events: [],
            fixture: {
              date: "2022-07-29T16:00:00+00:00",
              id: 867246,
              periods: {
                first: 1659024000,
                second: null,
              },
              referee: "Chrysovalantis Theouli, Cyprus",
              status: {
                elapsed: 1,
                long: "First Half",
                short: "1H",
              },
              timestamp: 1659024000,
              timezone: "UTC",
              venue: {
                city: "Kisvárda",
                id: 816,
                name: "Várkerti Stadion",
              },
            },
            goals: { home: 0, away: 0 },
            league: {
              country: "World",
              flag: null,
              id: 848,
              logo: "https://media.api-sports.io/football/leagues/848.png",
              name: "لیگ کنفرانس اروپا",
              round: "2nd Qualifying Round",
              season: 2022,
            },
            score: {
              extratime: { home: null, away: null },
              fulltime: { home: null, away: null },
              halftime: { home: 0, away: 0 },
              penalty: { home: null, away: null },
            },
            teams: {
              away: {
                id: 664,
                name: "کایرات آلماتی",
                logo: "https://media.api-sports.io/football/teams/664.png",
                winner: null,
              },
              home: {
                id: 2394,
                name: "اف‌سی کیسواردا",
                logo: "https://media.api-sports.io/football/teams/2394.png",
                winner: null,
              },
            },
          },
          {
            events: [],
            fixture: {
              date: "2022-07-28T16:00:00+00:00",
              id: 867246,
              periods: {
                first: 1659024000,
                second: null,
              },
              referee: "Chrysovalantis Theouli, Cyprus",
              status: {
                elapsed: 1,
                long: "First Half",
                short: "1H",
              },
              timestamp: 1659024000,
              timezone: "UTC",
              venue: {
                city: "Kisvárda",
                id: 816,
                name: "Várkerti Stadion",
              },
            },
            goals: { home: 0, away: 0 },
            league: {
              country: "World",
              flag: null,
              id: 848,
              logo: "https://media.api-sports.io/football/leagues/848.png",
              name: "لیگ کنفرانس اروپا",
              round: "2nd Qualifying Round",
              season: 2022,
            },
            score: {
              extratime: { home: null, away: null },
              fulltime: { home: null, away: null },
              halftime: { home: 0, away: 0 },
              penalty: { home: null, away: null },
            },
            teams: {
              away: {
                id: 664,
                name: "کایرات آلماتی",
                logo: "https://media.api-sports.io/football/teams/664.png",
                winner: null,
              },
              home: {
                id: 2394,
                name: "اف‌سی کیسواردا",
                logo: "https://media.api-sports.io/football/teams/2394.png",
                winner: null,
              },
            },
          },
          {
            events: [],
            fixture: {
              date: "2022-07-30T16:00:00+00:00",
              id: 867246,
              periods: {
                first: 1659024000,
                second: null,
              },
              referee: "Chrysovalantis Theouli, Cyprus",
              status: {
                elapsed: 1,
                long: "First Half",
                short: "1H",
              },
              timestamp: 1659024000,
              timezone: "UTC",
              venue: {
                city: "Kisvárda",
                id: 816,
                name: "Várkerti Stadion",
              },
            },
            goals: { home: 0, away: 0 },
            league: {
              country: "World",
              flag: null,
              id: 848,
              logo: "https://media.api-sports.io/football/leagues/848.png",
              name: "لیگ کنفرانس اروپا",
              round: "2nd Qualifying Round",
              season: 2022,
            },
            score: {
              extratime: { home: null, away: null },
              fulltime: { home: null, away: null },
              halftime: { home: 0, away: 0 },
              penalty: { home: null, away: null },
            },
            teams: {
              away: {
                id: 664,
                name: "کایرات آلماتی",
                logo: "https://media.api-sports.io/football/teams/664.png",
                winner: null,
              },
              home: {
                id: 2394,
                name: "اف‌سی کیسواردا",
                logo: "https://media.api-sports.io/football/teams/2394.png",
                winner: null,
              },
            },
          },
          {
            events: [],
            fixture: {
              date: "2022-08-01T16:00:00+00:00",
              id: 867246,
              periods: {
                first: 1659024000,
                second: null,
              },
              referee: "Chrysovalantis Theouli, Cyprus",
              status: {
                elapsed: 1,
                long: "First Half",
                short: "1H",
              },
              timestamp: 1659024000,
              timezone: "UTC",
              venue: {
                city: "Kisvárda",
                id: 816,
                name: "Várkerti Stadion",
              },
            },
            goals: { home: 0, away: 0 },
            league: {
              country: "World",
              flag: null,
              id: 848,
              logo: "https://media.api-sports.io/football/leagues/848.png",
              name: "لیگ کنفرانس اروپا",
              round: "2nd Qualifying Round",
              season: 2022,
            },
            score: {
              extratime: { home: null, away: null },
              fulltime: { home: null, away: null },
              halftime: { home: 0, away: 0 },
              penalty: { home: null, away: null },
            },
            teams: {
              away: {
                id: 664,
                name: "کایرات آلماتی",
                logo: "https://media.api-sports.io/football/teams/664.png",
                winner: null,
              },
              home: {
                id: 2394,
                name: "اف‌سی کیسواردا",
                logo: "https://media.api-sports.io/football/teams/2394.png",
                winner: null,
              },
            },
          },
          {
            events: [],
            fixture: {
              date: "2022-07-28T16:00:00+00:00",
              id: 867246,
              periods: {
                first: 1659024000,
                second: null,
              },
              referee: "Chrysovalantis Theouli, Cyprus",
              status: {
                elapsed: 1,
                long: "First Half",
                short: "1H",
              },
              timestamp: 1659024000,
              timezone: "UTC",
              venue: {
                city: "Kisvárda",
                id: 816,
                name: "Várkerti Stadion",
              },
            },
            goals: { home: 0, away: 0 },
            league: {
              country: "World",
              flag: null,
              id: 848,
              logo: "https://media.api-sports.io/football/leagues/848.png",
              name: "لیگ کنفرانس اروپا",
              round: "2nd Qualifying Round",
              season: 2022,
            },
            score: {
              extratime: { home: null, away: null },
              fulltime: { home: null, away: null },
              halftime: { home: 0, away: 0 },
              penalty: { home: null, away: null },
            },
            teams: {
              away: {
                id: 664,
                name: "کایرات آلماتی",
                logo: "https://media.api-sports.io/football/teams/664.png",
                winner: null,
              },
              home: {
                id: 2394,
                name: "اف‌سی کیسواردا",
                logo: "https://media.api-sports.io/football/teams/2394.png",
                winner: null,
              },
            },
          },
          {
            events: [],
            fixture: {
              date: "2022-08-02T16:00:00+00:00",
              id: 867246,
              periods: {
                first: 1659024000,
                second: null,
              },
              referee: "Chrysovalantis Theouli, Cyprus",
              status: {
                elapsed: 1,
                long: "First Half",
                short: "1H",
              },
              timestamp: 1659024000,
              timezone: "UTC",
              venue: {
                city: "Kisvárda",
                id: 816,
                name: "Várkerti Stadion",
              },
            },
            goals: { home: 0, away: 0 },
            league: {
              country: "World",
              flag: null,
              id: 848,
              logo: "https://media.api-sports.io/football/leagues/848.png",
              name: "لیگ کنفرانس اروپا",
              round: "2nd Qualifying Round",
              season: 2022,
            },
            score: {
              extratime: { home: null, away: null },
              fulltime: { home: null, away: null },
              halftime: { home: 0, away: 0 },
              penalty: { home: null, away: null },
            },
            teams: {
              away: {
                id: 664,
                name: "کایرات آلماتی",
                logo: "https://media.api-sports.io/football/teams/664.png",
                winner: null,
              },
              home: {
                id: 2394,
                name: "اف‌سی کیسواردا",
                logo: "https://media.api-sports.io/football/teams/2394.png",
                winner: null,
              },
            },
          },
          {
            events: [],
            fixture: {
              date: "2022-08-03T16:00:00+00:00",
              id: 867246,
              periods: {
                first: 1659024000,
                second: null,
              },
              referee: "Chrysovalantis Theouli, Cyprus",
              status: {
                elapsed: 1,
                long: "First Half",
                short: "1H",
              },
              timestamp: 1659024000,
              timezone: "UTC",
              venue: {
                city: "Kisvárda",
                id: 816,
                name: "Várkerti Stadion",
              },
            },
            goals: { home: 0, away: 0 },
            league: {
              country: "World",
              flag: null,
              id: 848,
              logo: "https://media.api-sports.io/football/leagues/848.png",
              name: "لیگ کنفرانس اروپا",
              round: "2nd Qualifying Round",
              season: 2022,
            },
            score: {
              extratime: { home: null, away: null },
              fulltime: { home: null, away: null },
              halftime: { home: 0, away: 0 },
              penalty: { home: null, away: null },
            },
            teams: {
              away: {
                id: 664,
                name: "کایرات آلماتی",
                logo: "https://media.api-sports.io/football/teams/664.png",
                winner: null,
              },
              home: {
                id: 2394,
                name: "اف‌سی کیسواردا",
                logo: "https://media.api-sports.io/football/teams/2394.png",
                winner: null,
              },
            },
          },
          {
            events: [],
            fixture: {
              date: "2022-08-04T16:00:00+00:00",
              id: 867246,
              periods: {
                first: 1659024000,
                second: null,
              },
              referee: "Chrysovalantis Theouli, Cyprus",
              status: {
                elapsed: 1,
                long: "First Half",
                short: "1H",
              },
              timestamp: 1659024000,
              timezone: "UTC",
              venue: {
                city: "Kisvárda",
                id: 816,
                name: "Várkerti Stadion",
              },
            },
            goals: { home: 0, away: 0 },
            league: {
              country: "World",
              flag: null,
              id: 848,
              logo: "https://media.api-sports.io/football/leagues/848.png",
              name: "لیگ کنفرانس اروپا",
              round: "2nd Qualifying Round",
              season: 2022,
            },
            score: {
              extratime: { home: null, away: null },
              fulltime: { home: null, away: null },
              halftime: { home: 0, away: 0 },
              penalty: { home: null, away: null },
            },
            teams: {
              away: {
                id: 664,
                name: "کایرات آلماتی",
                logo: "https://media.api-sports.io/football/teams/664.png",
                winner: null,
              },
              home: {
                id: 2394,
                name: "اف‌سی کیسواردا",
                logo: "https://media.api-sports.io/football/teams/2394.png",
                winner: null,
              },
            },
          },
          {
            events: [],
            fixture: {
              date: "2022-08-05T16:00:00+00:00",
              id: 867246,
              periods: {
                first: 1659024000,
                second: null,
              },
              referee: "Chrysovalantis Theouli, Cyprus",
              status: {
                elapsed: 1,
                long: "First Half",
                short: "1H",
              },
              timestamp: 1659024000,
              timezone: "UTC",
              venue: {
                city: "Kisvárda",
                id: 816,
                name: "Várkerti Stadion",
              },
            },
            goals: { home: 0, away: 0 },
            league: {
              country: "World",
              flag: null,
              id: 848,
              logo: "https://media.api-sports.io/football/leagues/848.png",
              name: "لیگ کنفرانس اروپا",
              round: "2nd Qualifying Round",
              season: 2022,
            },
            score: {
              extratime: { home: null, away: null },
              fulltime: { home: null, away: null },
              halftime: { home: 0, away: 0 },
              penalty: { home: null, away: null },
            },
            teams: {
              away: {
                id: 664,
                name: "کایرات آلماتی",
                logo: "https://media.api-sports.io/football/teams/664.png",
                winner: null,
              },
              home: {
                id: 2394,
                name: "اف‌سی کیسواردا",
                logo: "https://media.api-sports.io/football/teams/2394.png",
                winner: null,
              },
            },
          },
          {
            events: [],
            fixture: {
              date: "2022-08-06T16:00:00+00:00",
              id: 867246,
              periods: {
                first: 1659024000,
                second: null,
              },
              referee: "Chrysovalantis Theouli, Cyprus",
              status: {
                elapsed: 1,
                long: "First Half",
                short: "1H",
              },
              timestamp: 1659024000,
              timezone: "UTC",
              venue: {
                city: "Kisvárda",
                id: 816,
                name: "Várkerti Stadion",
              },
            },
            goals: { home: 0, away: 0 },
            league: {
              country: "World",
              flag: null,
              id: 848,
              logo: "https://media.api-sports.io/football/leagues/848.png",
              name: "لیگ کنفرانس اروپا",
              round: "2nd Qualifying Round",
              season: 2022,
            },
            score: {
              extratime: { home: null, away: null },
              fulltime: { home: null, away: null },
              halftime: { home: 0, away: 0 },
              penalty: { home: null, away: null },
            },
            teams: {
              away: {
                id: 664,
                name: "کایرات آلماتی",
                logo: "https://media.api-sports.io/football/teams/664.png",
                winner: null,
              },
              home: {
                id: 2394,
                name: "اف‌سی کیسواردا",
                logo: "https://media.api-sports.io/football/teams/2394.png",
                winner: null,
              },
            },
          },
          {
            events: [],
            fixture: {
              date: "2022-08-07T16:00:00+00:00",
              id: 867246,
              periods: {
                first: 1659024000,
                second: null,
              },
              referee: "Chrysovalantis Theouli, Cyprus",
              status: {
                elapsed: 1,
                long: "First Half",
                short: "1H",
              },
              timestamp: 1659024000,
              timezone: "UTC",
              venue: {
                city: "Kisvárda",
                id: 816,
                name: "Várkerti Stadion",
              },
            },
            goals: { home: 0, away: 0 },
            league: {
              country: "World",
              flag: null,
              id: 848,
              logo: "https://media.api-sports.io/football/leagues/848.png",
              name: "لیگ کنفرانس اروپا",
              round: "2nd Qualifying Round",
              season: 2022,
            },
            score: {
              extratime: { home: null, away: null },
              fulltime: { home: null, away: null },
              halftime: { home: 0, away: 0 },
              penalty: { home: null, away: null },
            },
            teams: {
              away: {
                id: 664,
                name: "کایرات آلماتی",
                logo: "https://media.api-sports.io/football/teams/664.png",
                winner: null,
              },
              home: {
                id: 2394,
                name: "اف‌سی کیسواردا",
                logo: "https://media.api-sports.io/football/teams/2394.png",
                winner: null,
              },
            },
          },
          {
            events: [],
            fixture: {
              date: "2022-08-08T16:00:00+00:00",
              id: 867246,
              periods: {
                first: 1659024000,
                second: null,
              },
              referee: "Chrysovalantis Theouli, Cyprus",
              status: {
                elapsed: 1,
                long: "First Half",
                short: "1H",
              },
              timestamp: 1659024000,
              timezone: "UTC",
              venue: {
                city: "Kisvárda",
                id: 816,
                name: "Várkerti Stadion",
              },
            },
            goals: { home: 0, away: 0 },
            league: {
              country: "World",
              flag: null,
              id: 848,
              logo: "https://media.api-sports.io/football/leagues/848.png",
              name: "لیگ کنفرانس اروپا",
              round: "2nd Qualifying Round",
              season: 2022,
            },
            score: {
              extratime: { home: null, away: null },
              fulltime: { home: null, away: null },
              halftime: { home: 0, away: 0 },
              penalty: { home: null, away: null },
            },
            teams: {
              away: {
                id: 664,
                name: "کایرات آلماتی",
                logo: "https://media.api-sports.io/football/teams/664.png",
                winner: null,
              },
              home: {
                id: 2394,
                name: "اف‌سی کیسواردا",
                logo: "https://media.api-sports.io/football/teams/2394.png",
                winner: null,
              },
            },
          },
        ]);
      })
      .catch((error) => {
        setHasError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return { retrieveCompetitionsData, data, loading, hasError };
}
