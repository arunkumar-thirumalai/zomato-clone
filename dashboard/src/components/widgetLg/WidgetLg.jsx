import "./widgetLg.css";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX-_Ry4IzNBdJstubG3noF43nAlDN8s9J0xZiiLVUjhvHGJS114w03FOuqNkrS0HRLVRI&usqp=CAU"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Karthik</span>
          </td>
          <td className="widgetLgDate">3 Dec 2021</td>
          <td className="widgetLgAmount">$12.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.news18.com/ibnlive/uploads/2021/12/ajith-kumar-3.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Ashwin</span>
          </td>
          <td className="widgetLgDate">5 Dec 2021</td>
          <td className="widgetLgAmount">$22.00</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://www.thehindu.com/entertainment/movies/y1x2ap/article33738786.ece/ALTERNATES/LANDSCAPE_1200/simbu"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Bharathi</span>
          </td>
          <td className="widgetLgDate">9 Dec 2021</td>
          <td className="widgetLgAmount">$36.00</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="http://m.behindwoods.com/tamil-movies-cinema-news-15/images/superstar-rajini-tweets-on-the-occasion-of-his-65th-birthday-photos-pictures-stills.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Bharani</span>
          </td>
          <td className="widgetLgDate">15 Dec 2021</td>
          <td className="widgetLgAmount">$182.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
}