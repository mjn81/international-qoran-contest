import './Rank.scss';

const Rank = ({rank}) => {
    return (
        <div className="rank-container">
            {rank.name}
        </div>
      );
}
 
export default Rank;