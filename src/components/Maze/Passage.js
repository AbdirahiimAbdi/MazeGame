export default function Passage({ isExit, direction, setCurrentRoom, allow, setPageType }) {
    // Dependant on which direction the passage will lead to will manipulate its styling
    // This is for obvious reasons like a passage east would need to stand against the wall whereas a north passage will be flat against the top
    switch (direction) {
        case 'north':
            return (
                <div
                    className={`absolute top-0 h-[30px] w-[100px] bg-[${
                        isExit ? '#D9C480' : '#433A3A'
                    }] hover:cursor-pointer`}
                    onClick={() => {
                        if (allow) {
                            // If allow is true then we check if the passage is the Exit passage
                            if (isExit) {
                                // set the pageType state to end to show the end screen
                                setPageType('end')
                            }
                            // If the passage is not the exit then add two to move up into the next room
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
                            // If the passage is not the exit then minus two to move down into the next room
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
                            // If the passage is not the exit then add one to move right into the next room
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
                            // If the passage is not the exit then minus one to move left into the next room
                            setCurrentRoom((prev) => prev - 1)
                        }
                    }}
                ></div>
            )
    }
}
