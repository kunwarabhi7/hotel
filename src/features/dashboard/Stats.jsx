/* eslint-disable react/prop-types */
import { formatCurrency } from "../../utils/helpers";
import Stat from "./Stat";
import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2";
const Stats = ({ bookings, confirmedStays, numDays, cabinCount }) => {
  const numOfBookings = bookings?.length;
  //2. Total Sales
  const sales = bookings?.reduce((acc, cur) => acc + cur.totalPrice, 0);
  //3. total checkins
  const checkins = confirmedStays?.length;
  //4. occupency rates
  const occupation =
    confirmedStays.reduce((acc, cur) => acc + cur.numOfNight, 0) /
    (numDays * cabinCount);
  console.log(confirmedStays);
  return (
    <>
      <Stat
        title="Bookings"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={numOfBookings}
      />
      <Stat
        title="Sales"
        color="green"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(sales)}
      />
      <Stat
        title="Checkins"
        color="indigo"
        icon={<HiOutlineCalendarDays />}
        value={checkins}
      />
      <Stat
        title="Occupency Rates"
        color="yellow"
        icon={<HiOutlineChartBar />}
        value={Math.round(occupation * 100) + "%"}
      />
    </>
  );
};

export default Stats;
