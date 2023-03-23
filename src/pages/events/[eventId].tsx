import type { NextPageWithLayout } from "next";

import { UserLayout } from "@/components/layouts/user";
import { UserEventsItemPageComponent } from "@/components/pageComponents/user/events/eventId";

const Page: NextPageWithLayout = () => <UserEventsItemPageComponent />;
Page.getLayout = (page) => <UserLayout>{page}</UserLayout>;
export default Page;
