class ReleaseNotes extends React.Component {

    constructor() {
        super();

        this.ajax = new Ajax();

        this.state = {
            notes: [],
        }
    }

    componentWillMount() {

        // this.ajax.getJSON('/release-notes.json', function (test) {
        //     console.log(test);
        // });

        // this.ajax.get('/release-notes.json').then(
        //     (value) => {
        //         this.setNotes(value);
        //     },
        //     function (reason) {
        //         console.error(reason);
        //     }
        // )
    }


    componentDidMount() {
        this.ajax.get('http://www.ariel.io/synergy/assets/release-notes.json').then(
            (value) => {
                this.setNotes(value.releaseNotes);
            },
            function (reason) {
                console.error(reason);
            }
        )
    }

    setNotes(notes) {
        this.setState({ notes: notes });
    }

    render() {
        return (
            <section className="release-notes">
                <div className="container heading">
                    <h1>Release Notes for Synergy</h1>
                    <p>View the release notes here:</p>
                </div>
                <div id="release-notes" className="container">

                    {
                        this.state.notes.map((val, i) => {
                            return (
                                <div key={i}>
                                    <div>
                                        <p className="meta">
                                            <span className="release-date">{val.date}</span>
                                            <span className="release-version">{val.version}</span>
                                        </p>
                                        <h2>{val.title}</h2>
                                    </div>
                                    <ul className="changes">
                                        {
                                            val.updates.map((update, i2) => {
                                                return (
                                                    <li key={i2}>
                                                        <div className="change-label-container"><em className={update.type}>{update.type}</em></div>
                                                        {update.data}
                                                    </li>
                                                )
                                            })
                                        }
                                    
                                    </ul>
                                </div>
                            
                            );
                        })
                    }

                    </div>
            </section >

        );
    }
}