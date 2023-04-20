export default function Threat({ index, threat, setAction, setNarratorType }) {
    return (
        <img
            className="hover:cursor-pointer"
            key={index}
            src={threat.image}
            alt={threat.type}
            onClick={() => {
                setAction({ threat: threat.type, mode: 'fight', index: index })
                setNarratorType({
                    title: threat.type,
                    line1: `You’ve encountered ${threat.type}.`,
                    line2: 'What will you do?',
                })
            }}
        />
    )
}
