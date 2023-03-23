import type { NextPageWithLayout } from "next";

import { UserLayout } from "@/components/layouts/user";
import { UserIndexPageComponents } from "@/components/pageComponents/user/Index";

const Page: NextPageWithLayout = () => <UserIndexPageComponents />;
Page.getLayout = (page) => <UserLayout>{page}</UserLayout>;
export default Page;
