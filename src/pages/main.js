import { Container, Grid, Stack } from "@mui/material";
import UserCard from "../components/card/user-card";
import coverImg from "../assets/cover.png";
import avatarImg from "../assets/avatar.png";
import CountCard from "../components/card/count-card";
import AccordionCustom from "../components/accordion-custom";
import Header from "../sections/main/header";
import SearchBox from "../sections/main/search-box";
import TagList from "../sections/main/tag-list";
import FeaturedJobs from "../sections/main/featured-jobs";
import RecommendedJobs from "../sections/main/recommended-jobs";

const jobs = [
  {
    id: 1,
    title: "UI/UX Designer",
    isPromoted: true,
    company: "Teams",
    location: "Seattle, USA (Remote)",
    postedOn: "1 day ago",
    applicants: 22,
  },
  {
    id: 2,
    title: "UI/UX Designer",
    isPromoted: true,
    company: "Teams",
    location: "Seattle, USA (Remote)",
    postedOn: "1 day ago",
    applicants: 22,
  },
  {
    id: 3,
    title: "UI/UX Designer",
    isPromoted: true,
    company: "Teams",
    location: "Seattle, USA (Remote)",
    postedOn: "1 day ago",
    applicants: 22,
  },
  {
    id: 4,
    title: "UI/UX Designer",
    isPromoted: true,
    company: "Teams",
    location: "Seattle, USA (Remote)",
    postedOn: "1 day ago",
    applicants: 22,
  },
  {
    id: 5,
    title: "UI/UX Designer",
    isPromoted: true,
    company: "Teams",
    location: "Seattle, USA (Remote)",
    postedOn: "1 day ago",
    applicants: 22,
  },
];
const jobs2 = [
  {
    id: 1,
    title: "UI/UX Designer",
    isPromoted: false,
    company: "Teams",
    location: "Seattle, USA (Remote)",
    postedOn: "1 day ago",
    applicants: 22,
  },
  {
    id: 2,
    title: "UI/UX Designer",
    isPromoted: false,
    company: "Teams",
    location: "Seattle, USA (Remote)",
    postedOn: "1 day ago",
    applicants: 22,
  },
  {
    id: 3,
    title: "UI/UX Designer",
    isPromoted: false,
    company: "Teams",
    location: "Seattle, USA (Remote)",
    postedOn: "1 day ago",
    applicants: 22,
  },
  {
    id: 4,
    title: "UI/UX Designer",
    isPromoted: false,
    company: "Teams",
    location: "Seattle, USA (Remote)",
    postedOn: "1 day ago",
    applicants: 22,
  },
  {
    id: 5,
    title: "UI/UX Designer",
    isPromoted: false,
    company: "Teams",
    location: "Seattle, USA (Remote)",
    postedOn: "1 day ago",
    applicants: 22,
  },
];
const users = [
  {
    name: "Albert Flores",
    coverUrl: coverImg,
    roles: [
      "Senior Product Designer",
      "UI/UX Designer",
      "Graphic Designer",
      "Web Designer",
    ],
    avatarUrl: avatarImg,
    profileVisitors: 140,
    resumeViewers: 20,
    jobsCount: 88,
    location: "Clinton, Maryland",
  },
];
const Main = () => {
  return (
    <Container maxWidth="xl" sx={{ paddingBlock: "1.5rem" }}>
      <Grid container gap={3}>
        <Grid item md={3}>
          <Stack gap={".75rem"}>
            <UserCard user={users[0]} />
            <CountCard data={users[0]} />
            <AccordionCustom />
          </Stack>
        </Grid>
        <Grid item md={8}>
          <Stack gap="1rem">
            {/* heading */}
            <Header />

            {/* searchBox */}
            <SearchBox />

            {/* tagsBox */}
            <TagList />

            {/* featuredjobs */}
            <FeaturedJobs jobs={jobs} />

            {/* recommended jobs */}
            <RecommendedJobs jobs={jobs2} />
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Main;
