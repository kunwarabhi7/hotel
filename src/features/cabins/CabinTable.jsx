import CabinRow from "./CabinRow.jsx";
import Spinner from "../../ui/Spinner.jsx";
import { useCabins } from "./useCabins.js";
import Table from "../../ui/Table.jsx";
import Menus from "../../ui/Menus.jsx";
import { useSearchParams } from "react-router-dom";

const CabinTable = () => {
  const { isLoading, cabins } = useCabins();
  const [searchParams] = useSearchParams();

  //filter
  const fitlerValue = searchParams.get("discount") || "all";
  let filteredCabin;
  if (fitlerValue === "all") filteredCabin = cabins;
  if (fitlerValue === "no-discount")
    filteredCabin = cabins?.filter((cabin) => cabin.discount === 0);
  if (fitlerValue === "with-discount")
    filteredCabin = cabins?.filter((cabin) => cabin.discount > 0);

  //sorting

  const sortBy = searchParams.get("sortBy") || "startDate-asc";
  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  const sortedCabins = filteredCabin.sort(
    (a, b) => (a[field] - b[field]) * modifier
  );

  if (isLoading) return <Spinner />;
  return (
    <Menus>
      <Table columns=" 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header>
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </Table.Header>
        <Table.Body
          data={sortedCabins}
          render={(cabin) => <CabinRow key={cabin.id} cabin={cabin} />}
        />
      </Table>
    </Menus>
  );
};

export default CabinTable;
