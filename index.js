class YMetrikaHelper {
    constructor(id, debug = false) {
        this.id = id;
        this.debug = debug;
    }

    reachGoal(goal) {
        if (this.debug) console.debug(`metrika goal: ${goal}`);
        try {
            ym(this.id, 'reachGoal', goal);
        } catch (error) {
            console.debug(error);
        }
    }

    trackEvent(goal, selectors, event = 'click') {
        document.querySelectorAll(selectors.join(',')).forEach(item => {
            item.addEventListener(event, () => this.reachGoal(goal));
        });
    }
}

const YMetrika = new YMetrikaHelper(99999999, true);
