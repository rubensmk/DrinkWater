import React, { useState } from 'react';
import { Container, Button, Card, CardImg, Info } from './styles'
import waterImg from '../../assets/water.svg';

interface IWater {
    timestamp: string;
    id: number;
}

const Home: React.FC = () => {

    const [counter, setCounter] = useState(0);
    const [imgRepo, setImgRepo] = useState<IWater[]>([]);

    function addZero(i: number) {
        let digit;
        if (i < 10) {
            digit = "0" + i;
        } else {
            digit = i;
        }
        return digit;
    }

    function formmatedDate() {
        const currentDate = new Date();
        const formmatedHour = addZero(currentDate.getHours());
        const formmatedMinutes = addZero(currentDate.getMinutes());
        return formmatedHour + ':' + formmatedMinutes;
    }

    function handleAddCounter() {
        setCounter(counter + 1);
        if (counter <= 0) {
            setImgRepo([{ id: counter, timestamp: `${formmatedDate()}` }]);
            console.log(imgRepo);
        } else {
            setImgRepo([...imgRepo, { id: counter, timestamp: `${formmatedDate()}` }]);
            console.log(imgRepo);
        }
        return;
    }

    function handleRemoveCounter() {
        if (counter === 0) {
            return counter;
        } else {
            setCounter(counter - 1);
            imgRepo.pop();
        }
    }



    return (
        <>
            <Info>
                <div className='tooltip'>
                    i
                    <span className='tooltiptext'>Independentemente do gênero, idade e atividade, hidratar é fundamental. Pelo menos 2 litros por dia, ou seja, 10 copos de 200ml, é um consumo importante para a saúde.</span>
                </div>
            </Info>
            <Container>
                <Card>
                    {counter > 0 && imgRepo.map(image => (
                        <CardImg key={image.id}>
                            <strong>{image.timestamp}</strong>
                            <img src={waterImg} alt="Water" />
                        </CardImg>
                    ))}
                </Card>
                <Button>
                    <button onClick={handleRemoveCounter}>-</button>
                    <div>{counter}</div>
                    <button onClick={handleAddCounter}>+</button>
                </Button>
            </Container>
        </>
    );
}

export default Home;