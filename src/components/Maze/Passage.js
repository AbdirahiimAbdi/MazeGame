import Wealth from './Wealth'

export default function Passage({ isExit, direction }) {
    if (direction === 'east' || direction === 'west') {
        let rotate = 'rotate-90'
    }

    switch (direction) {
        case 'north':
            return <div className={`absolute top-0 h-[30px] w-[100px] bg-[${isExit ? '#D9C480' : '#433A3A'}]`} ></div>
        case 'south':
            return <div className={`absolute bottom-0 h-[30px] w-[100px] bg-[${isExit ? '#D9C480' : '#433A3A'}]`} ></div>
        case 'east':
            return <div className={`absolute right-0 h-[100px] w-[30px] bg-[${isExit ? '#D9C480' : '#433A3A'}]`} ></div>
        case 'west':
            return <div className={`absolute left-0 h-[100px] w-[30px] bg-[${isExit ? '#D9C480' : '#433A3A'}]`} ></div>
    }
}