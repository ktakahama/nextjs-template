import type { NextPageWithLayout } from "next";

import { UserLayout } from "@/components/layouts/user";
import { UserEventsPageComponent } from "@/components/pageComponents/user/events/index";

const Page: NextPageWithLayout = () => <UserEventsPageComponent />;
Page.getLayout = (page) => <UserLayout>{page}</UserLayout>;
export default Page;
