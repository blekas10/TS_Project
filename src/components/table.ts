
import getPropCount from "../helpers/get-prop-count";

type rowData = {
    [key:string]:string
}

type TableProps<Type extends rowData> = {
    title: string,
    columns: Type,
    rowsData: Type[],
}

class Table<Type extends rowData> {

    static propsAreValid = <T extends rowData>({columns, rowsData}: TableProps<T>): boolean => {
        const colCount = getPropCount(columns);

        return rowsData.every(row => getPropCount(row) === colCount)
    };
    
    private props: TableProps<Type>;
    private tbody: HTMLTableSectionElement;
    private thead: HTMLTableSectionElement;
    public htmlElement: HTMLTableElement;

    constructor(props: TableProps<Type>){
        if(!Table.propsAreValid(props)){
            throw new Error('props are not compatable. Please check columns and rows data ')
        }

        this.props = props;
        this.thead = document.createElement('thead');
        this.tbody = document.createElement('tbody');
        this.htmlElement = document.createElement('table');

        this.initialize();
    }

    initializeHead = () => {
        console.log(this.props.columns);

        const thElementsString = Object.values(this.props.columns).map(columnName => `<th>${columnName}</th>`).join("")
        
        const columnCount = thElementsString.length;

        this.thead.className = 'bg-dark text-white' 
        this.thead.innerHTML = `
        <tr class="text-center h2">
            <th colspan="${columnCount}">${this.props.title}</th>
        </tr>
        <tr>
            ${thElementsString}
        </tr>
        `;
            
    };

    initializeBody = () => {
        const trsHtmlString = this.props.rowsData.map((rowData) => {

            const tdsHtmlStr= Object.keys(this.props.columns).map(key => `<td>${rowData[key]}</td>`).join("");

            return `<tr>${tdsHtmlStr}</tr>`;
        })
        .join('');

        console.log(trsHtmlString);
        


        this.tbody.innerHTML = trsHtmlString;
    };


    initialize(){
        this.initializeHead();
        this.initializeBody();

        this.htmlElement.className = 'table table-striped'
        
        this.htmlElement.append(
            this.thead,
            this.tbody
        )
    }
}

export default Table;
