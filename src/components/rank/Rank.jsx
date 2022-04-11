import './Rank.scss';

const Rank = ({rank , index}) => {
    return (
        <div className={`rank-container ${index % 2 ===0 ? 'right' : ''}`}>
            {(index+1)+' - ' + rank.name}
        </div>
      );
}
 
export default Rank;