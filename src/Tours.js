import './App.css';
import Card from './Card';

function Tours({tours, removeTour}) {
    return (
        <div className='tours'>
            <div className='details-tour'>
                {
                    tours.map((tour) => {
                        return (<Card key={tour.id} {...tour} removeTour={removeTour}></Card>);
                    })
                }
            </div>
        </div>
    );
}

export default Tours;