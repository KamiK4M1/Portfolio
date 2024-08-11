import me from "../image/me.png";
import ig from "../image/ig.png";
import Image from "next/image";

export default function Aboutme() {
    return (
        <section className="pt-16 flex justify-center items-center flex-col">
            <div className="avatar">
                <div className="w-40 rounded-full">
                    <Image src={me} alt="me" />
                </div>
            </div>
                <div className=" p-10 flex flex-wrap justify-center items-center">
                    <div className="p-5">
                        <div
                            tabIndex={0}
                            className="collapse collapse-open border border-base-300 bg-base-200"
                        >
                            <div className="collapse-title">
                                <div className="text-white/60">
                                    <p>ชื่อจริง</p>
                                </div>
                                <div>
                                    <p>ชิติพัทธ์ สร้อยสังวาลย์</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-5">
                        <div
                            tabIndex={0}
                            className="collapse collapse-open border border-base-300 bg-base-200 pr-24"
                        >
                            <div className="collapse-title">
                                <div className="text-white/60">
                                    <p>ชื่อเล่น</p>
                                </div>
                                <div>
                                    <p>เว็บไซด์</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-5">
                        <div
                            tabIndex={0}
                            className="collapse collapse-open border border-base-300 bg-base-200 pr-24"
                        >
                            <div className="collapse-title">
                                <div className="text-white/60">
                                    <p>วันเกิด</p>
                                </div>
                                <div>
                                    <p>13/10/2007</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-5">
                        <div
                            tabIndex={0}
                            className="collapse collapse-open border border-base-300 bg-base-200"
                        >
                            <div className="collapse-title">
                                <div className="text-white/60">
                                    <p>ภาษา / Framework ที่ใช้ประจำ</p>
                                </div>
                                <div>
                                    <p>
                                        Python , C , C++ , C# , Javascript , React , Next.js , Cira
                                        Core
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-5">
                        <div
                            tabIndex={0}
                            className="collapse collapse-open border border-base-300 bg-base-200"
                        >
                            <div className="collapse-title">
                                <div className="text-white/60">
                                    <p>สนใจในด้าน</p>
                                </div>
                                <div>
                                    <p>
                                        AI , Full-Stack Developer
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <p className=" text-2xl">Contact</p>
                <div className="p-5">
                        <div
                            tabIndex={0}
                            className="collapse collapse-open border border-base-300 bg-base-200"
                        >
                            <div className="collapse-title">
                                <Image src={ig} alt="ig" height={20} width={20}/> <p>
                                        AI , Full-Stack Developer
                                    </p>
                            </div>
                        </div>
                    </div>
        </section>
    );
}
