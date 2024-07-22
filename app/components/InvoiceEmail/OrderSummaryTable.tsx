import { Section, Heading, Row, Column } from "@react-email/components";

interface OrderDetail {
    id: number;
  label: string;
  value: string;
  amt: string;
}

interface OrderSummaryTableProps {
  title: string;
  details: OrderDetail[];
}

const OrderSummaryTable = ({title, details}: OrderSummaryTableProps)=>{
    return(

        <Section className="my-6" style={{borderTop: "1px solid #CBD5E1"}}>
      <div >
      <Heading className="my-4 font-semibold">{title}</Heading>
      </div>
      <div className="rounded-lg  px-6 py-2" style={{backgroundColor:"#F6F8FB"}}>
      {details.map((detail) => (
        <Row className="border-b last:border-none" key={detail.id}>
          <div className="flex justify-between align-center">
          <Column className="py-2  text-sm  text-[#434343]">{detail.label}</Column>
          <Column className="py-2 text-sm text-center">{detail.value}</Column>
          <Column className="py-2 text-sm font-semibold text-[#0A0A0A]">{detail.amt}</Column>
          </div>
        </Row>
      ))}
      </div>
    </Section>

    );
}

export default OrderSummaryTable;