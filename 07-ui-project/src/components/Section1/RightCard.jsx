import RightCardContent from "./RightCardContent";

const RightCard = (props) => {
  return (
    <div className="w-1/3 bg-red-500 rounded-4xl relative overflow-hidden">
      <img className="w-full h-full object-cover" src={props.img} alt=""/>
      <RightCardContent color={props.color} tag={props.tag} num={props.num}/>
    </div>
  );
};

export default RightCard;
