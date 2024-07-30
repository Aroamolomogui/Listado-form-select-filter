import Club from "./Club";

function AllClubs({ clubs }) {

  return (
  <div>
    {clubs.map((item,i) => <Club key={i}club={item}/>)}
</div>

  )
}
export default AllClubs;
