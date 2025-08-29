import style from "./BlogDetailPage.module.css";

const blogDetail = [
  {
    id: 19,
    category: "Technology / Neuralink",
    title: "Elon Musk first brain-chip",
    description:
      "In 2024, Noland Arbaugh, a 31-year-old man paralyzed below the shoulders after a diving accident, became the first person to receive Elon Musk’s Neuralink brain implant. Eighteen months after the operation, Arbaugh describes his life as having been transformed: he can now control a computer cursor, browse the internet, play chess, and even enjoy Mario Kart using only his thoughts. Before Neuralink, Arbaugh was often dependent on caregivers and stuck waiting in hospital rooms; today he is pursuing online classes, reconnecting socially, and even considering launching his own business. Neuralink engineers revealed that while the implant initially lost up to 85% of its connections, software fixes restored functionality, making the device increasingly reliable. The company is now preparing broader clinical trials in the UK to help other patients with severe spinal injuries and ALS. For Arbaugh, the chip has given him back independence, purpose, and optimism for the future.In 2024, Noland Arbaugh, a 31-year-old man paralyzed below the shoulders after a diving accident, became the first person to receive Elon Musk’s Neuralink brain implant. Eighteen months after the operation, Arbaugh describes his life as having been transformed: he can now control a computer cursor, browse the internet, play chess, and even enjoy Mario Kart using only his thoughts. Before Neuralink, Arbaugh was often dependent on caregivers and stuck waiting in hospital rooms; today he is pursuing online classes, reconnecting socially, and even considering launching his own business. Neuralink engineers revealed that while the implant initially lost up to 85% of its connections, software fixes restored functionality, making the device increasingly reliable. The company is now preparing broader clinical trials in the UK to help other patients with severe spinal injuries and ALS. For Arbaugh, the chip has given him back independence, purpose, and optimism for the future.In 2024, Noland Arbaugh, a 31-year-old man paralyzed below the shoulders after a diving accident, became the first person to receive Elon Musk’s Neuralink brain implant. Eighteen months after the operation, Arbaugh describes his life as having been transformed: he can now control a computer cursor, browse the internet, play chess, and even enjoy Mario Kart using only his thoughts. Before Neuralink, Arbaugh was often dependent on caregivers and stuck waiting in hospital rooms; today he is pursuing online classes, reconnecting socially, and even considering launching his own business. Neuralink engineers revealed that while the implant initially lost up to 85% of its connections, software fixes restored functionality, making the device increasingly reliable. The company is now preparing broader clinical trials in the UK to help other patients with severe spinal injuries and ALS. For Arbaugh, the chip has given him back independence, purpose, and optimism for the future.In 2024, Noland Arbaugh, a 31-year-old man paralyzed below the shoulders after a diving accident, became the first person to receive Elon Musk’s Neuralink brain implant. Eighteen months after the operation, Arbaugh describes his life as having been transformed: he can now control a computer cursor, browse the internet, play chess, and even enjoy Mario Kart using only his thoughts. Before Neuralink, Arbaugh was often dependent on caregivers and stuck waiting in hospital rooms; today he is pursuing online classes, reconnecting socially, and even considering launching his own business. Neuralink engineers revealed that while the implant initially lost up to 85% of its connections, software fixes restored functionality, making the device increasingly reliable. The company is now preparing broader clinical trials in the UK to help other patients with severe spinal injuries and ALS. For Arbaugh, the chip has given him back independence, purpose, and optimism for the future.In 2024, Noland Arbaugh, a 31-year-old man paralyzed below the shoulders after a diving accident, became the first person to receive Elon Musk’s Neuralink brain implant. Eighteen months after the operation, Arbaugh describes his life as having been transformed: he can now control a computer cursor, browse the internet, play chess, and even enjoy Mario Kart using only his thoughts. Before Neuralink, Arbaugh was often dependent on caregivers and stuck waiting in hospital rooms; today he is pursuing online classes, reconnecting socially, and even considering launching his own business. Neuralink engineers revealed that while the implant initially lost up to 85% of its connections, software fixes restored functionality, making the device increasingly reliable. The company is now preparing broader clinical trials in the UK to help other patients with severe spinal injuries and ALS. For Arbaugh, the chip has given him back independence, purpose, and optimism for the future.",
    author: "Economic Times Tech Desk",
    date: "24 August 2025",
    readTime: "6 min",
    image: `${process.env.PUBLIC_URL}/images/neuralink-arbaugh-mario-kart.avif`,
  },
];
console.log(blogDetail[0].id);
export default function BlogDetail() {
  return (
    <div className={style.BlogDetailConatainer}>
      <div className={style.blogDetailBox}>
        <img
          alt={blogDetail[0].title}
          src={blogDetail[0].image}
          className={style.blogImage}
        />
        <h3>{blogDetail[0].category}</h3>
        <h3>{blogDetail[0].title}</h3>
        <p>{blogDetail[0].description}</p>
        <p>{blogDetail[0].author}</p>
        <p>
          {blogDetail[0].date} • {blogDetail[0].readTime}
        </p>
      </div>
    </div>
  );
}
