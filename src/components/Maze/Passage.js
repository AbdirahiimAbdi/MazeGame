import Wealth from './Wealth'

export default function Passage({ isExit, direction, setCurrentRoom, allow, setPageType }) {
    switch (direction) {
        case 'north':
            return (
                <div
                    className={`absolute top-0 h-[30px] w-[100px] bg-[${
                        isExit ? '#D9C480' : '#433A3A'
                    }] hover:cursor-pointer`}
                    onClick={() => {
                        if (allow) {
                            if (isExit) {
                                setPageType('end')
                            }
                            setCurrentRoom((prev) => prev + 2)
                        }
                    }}
                ></div>
            )
        case 'south':
            return (
                <div
                    className={`absolute bottom-0 h-[30px] w-[100px] bg-[${
                        isExit ? '#D9C480' : '#433A3A'
                    }] hover:cursor-pointer`}
                    onClick={() => {
                        if (allow) {
                            if (isExit) {
                                setPageType('end')
                            }
                            setCurrentRoom((prev) => prev - 2)
                        }
                    }}
                ></div>
            )
        case 'east':
            return (
                <div
                    className={`absolute right-0 h-[100px] w-[30px] bg-[${
                        isExit ? '#D9C480' : '#433A3A'
                    }] hover:cursor-pointer`}
                    onClick={() => {
                        if (allow) {
                            if (isExit) {
                                setPageType('end')
                            }
                            setCurrentRoom((prev) => prev + 1)
                        }
                    }}
                ></div>
            )
        case 'west':
            return (
                <div
                    className={`absolute left-0 h-[100px] w-[30px] bg-[${
                        isExit ? '#D9C480' : '#433A3A'
                    }] hover:cursor-pointer`}
                    onClick={() => {
                        if (allow) {
                            if (isExit) {
                                setPageType('end')
                            }
                            setCurrentRoom((prev) => prev - 1)
                        }
                    }}
                ></div>
            )
    }
}
