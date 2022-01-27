import React, {useState} from "react";

const WatchesForm = ({onAdd}) => {
    const [form, setForm] = useState({"name":"", "timezone": ""})

    const handleNameChange = e => {
        const {name, value} = e.target
        setForm(prevForm => ({...prevForm, [name]:value }))
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (form.name && form.timezone){
            onAdd(form)
            setForm({"name":"", "timezone": ""})
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="row align-items-end">
                <div className="col-3">
                    <div className="form-group">
                        <label
                            htmlFor="name"
                        >
                            Название
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="text" 
                            className="form-control"
                            value={form.name}
                            onChange={handleNameChange}
                        />
                    </div>
                </div>
                <div className="col-3">
                    <div className="form-group">
                        <label
                            htmlFor="timezone"
                        >
                            Временная зона 
                        </label>
                        <input
                            id="timezone"
                            name="timezone"
                            type="text" 
                            className="form-control"
                            value={form.timezone}
                            onChange={handleNameChange}
                        />
                    </div>
                </div>
                <div className="col-3">
                    <button className="btn btn-light">Добавить</button>
                </div>
            </div>
        </form>
    )
}

export default WatchesForm;