/* eslint-disable no-unused-vars */
import CabinRow from "./CabinRow.jsx";
import Spinner from "../../ui/Spinner.jsx";
import styled from "styled-components";
import { useCabins } from "./useCabins.js";
import Table from "../../ui/Table.jsx";
import Menus from "../../ui/Menus.jsx";
import { useSearchParams } from "react-router-dom";
const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
  padding: 1.6rem 2.4rem;
`;

const CabinTable = () => {
  const { isLoading, cabins, error } = useCabins();
  const [searchParams] = useSearchParams();
  const fitlerValue = searchParams.get("discount") || "all";
  let filteredCabin;

  if (fitlerValue === "all") filteredCabin = cabins;
  if (fitlerValue === "no-discount")
    filteredCabin = cabins.filter((cabin) => cabin.discount === 0);
  if (fitlerValue === "with-discount")
    filteredCabin = cabins.filter((cabin) => cabin.discount > 0);

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
          data={filteredCabin}
          render={(cabin) => <CabinRow key={cabin.id} cabin={cabin} />}
        />
      </Table>
    </Menus>
  );
};

export default CabinTable;
