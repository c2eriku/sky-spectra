import OptionButton from "@/components/OptionWrapper/OptionButton"

export default function OptionWrapper({ options, type, userChoice, updateUserChoice }) {

    function optionButtonHandler(e) {
        if (e.target.checked) {
            if (type === 'radio') { userChoice.clear(); }
            userChoice.add(e.target.id);
        } else {
            userChoice.delete(e.target.id);
        }
        updateUserChoice(userChoice);
    }

    return <>
        {
            options?.map((o) => {
                return <OptionButton
                    key={o.optionKey}
                    type={type}
                    name="optionSet"
                    optionKey={o.optionKey}
                    description={o.description}
                    onChange={optionButtonHandler}
                    defaultChecked={userChoice.has(o.optionKey)}
                ></OptionButton>
            })
        }
    </>
}