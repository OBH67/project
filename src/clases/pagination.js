export default class Pagination {
    // limit resultados totales
    // offset INDEX
    constructor(ApiInstance, limit, offset) {
        this.api = new ApiInstance();
        this.limit = limit;
        this.offset = offset;
        this.values = [];
        this.currentValues = [];
        this.next = "";
        this.previous = "";
        this.total = 0;
    }
    async getApiData() {
        let resultado = await this.api.pagination(this.limit, this.offset);
        this.total = resultado.count;
        this.currentValues = [];
        resultado.results.forEach((item) => {
            this.values.push(item);
            this.currentValues.push(item);
        });
        this.next = this.values.next;
        this.previous = this.values.previous;
    }
    async nextT() {
        this.offset = this.offset + this.limit;
        await this.getApiData();
    }

    async previousT() {
        this.offset = this.offset - this.limit;
        if (this.offset <= 0) {
            this.offset = 0;
        }
        await this.getApiData();
    }

    setoffset(n) {
        this.offset = n;
        this.getApiData();
    }
    setlimit(n) {
        this.offset = 0;
        this.limit = n;
        this.getApiData();
    }

    getvalues() {
        return this.value;
    }
}
