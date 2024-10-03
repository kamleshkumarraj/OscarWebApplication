import React from 'react'

const Privacysection = () => {
    return (
        <div className="w-full mx-auto px-6 lg:px-20 py-8 lg:py-20 bg-gray-50 min-h-screen">
            <h1 className="text-lg lg:text-xl font-bold mb-6 text-gray-700">Home / Terms of Service</h1>

            {/* Section 1: Acceptance of Terms */}
            <section className="mb-8 p-6">
                <h2 className="border-b-2 border-dashed border-black text-xl lg:text-2xl font-semibold mb-8 pb-2 hover:text-blue-600 transition duration-300">
                    1. Acceptance of Terms
                </h2>
                <p className="text-gray-700 leading-relaxed text-sm lg:text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lobortis
                    urna quis velit placerat, non dictum justo dapibus. Nulla turpis erat,
                    volutpat eu nunc a, aliquet hendrerit turpis. Donec lobortis urna
                    nibh, nec sodales mi convallis ac. Aliquam sollicitudin, enim
                    hendrerit tristique imperdiet, ligula eros gravida est, sit amet
                    tristique enim sem non sem. Duis porta dignissim turpis id elementum.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci varius
                    natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                    mus. Pellentesque sit amet ipsum eu elit interdum tempor ut non magna.
                    Donec vel eros eros. Ut pharetra quam quis turpis volutpat ultricies.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4 text-sm lg:text-base">
                    Donec pharetra egestas pretium. Vestibulum feugiat enim non velit
                    auctor ultricies. Aliquam tortor felis, ullamcorper eu elit eu,
                    vestibulum suscipit nunc. Nunc dapibus purus et commodo fringilla. Nam
                    rhoncus quam ut augue congue, in maximus felis sodales. Nam eleifend
                    varius elit in sagittis. Praesent quam felis, consequat eget consequat
                    eu, aliquam eget ex. Ut vitae enim eget ipsum laoreet molestie ut et
                    mi. Morbi fermentum ex nisi, et lobortis quam consequat in.
                </p>
            </section>

            {/* Section 2: General Use of the Hosting Service */}
            <section className="mb-8 p-6">
                <h2 className="border-b-2 border-dashed border-black text-xl lg:text-2xl font-semibold mb-8 pb-2 hover:text-blue-600 transition duration-300">
                    2. General Use of the Hosting Service
                </h2>
                <p className="text-gray-700 leading-relaxed text-sm lg:text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lobortis
                    urna quis velit placerat, non dictum justo dapibus. Nulla turpis erat,
                    volutpat eu nunc a, aliquet hendrerit turpis. Donec lobortis urna
                    nibh, nec sodales mi convallis ac. Aliquam sollicitudin, enim
                    hendrerit tristique imperdiet, ligula eros gravida est, sit amet
                    tristique enim sem non sem. Duis porta dignissim turpis id elementum.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci varius
                    natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                    mus. Pellentesque sit amet ipsum eu elit interdum tempor ut non magna.
                    Donec vel eros eros. Ut pharetra quam quis turpis volutpat ultricies.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4 text-sm lg:text-base">
                    Donec pharetra egestas pretium. Vestibulum feugiat enim non velit
                    auctor ultricies. Aliquam tortor felis, ullamcorper eu elit eu,
                    vestibulum suscipit nunc. Nunc dapibus purus et commodo fringilla. Nam
                    rhoncus quam ut augue congue, in maximus felis sodales. Nam eleifend
                    varius elit in sagittis. Praesent quam felis, consequat eget consequat
                    eu, aliquam eget ex. Ut vitae enim eget ipsum laoreet molestie ut et
                    mi. Morbi fermentum ex nisi, et lobortis quam consequat in.
                </p>
            </section>

            {/* Section 3: Charges and Billing */}
            <section className="mb-8 p-6">
                <h2 className="border-b-2 border-dashed border-black text-xl lg:text-2xl font-semibold mb-8 pb-2 hover:text-blue-600 transition duration-300">
                    3. Charges and Billing
                </h2>
                <p className="text-gray-700 leading-relaxed text-sm lg:text-base">
                    VistaPrint reserves the right to charge fees for the Services or any
                    portion thereof and any applicable fees will be posted on VistaPrint’s
                    website. If Member is required to pay a fee for all or any part of the
                    Service for which Member has chosen to subscribe, Member will make an
                    advance payment for all applicable fees incurred by Member in
                    connection with Member's Service Account.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4 text-sm lg:text-base">
                    VistaPrint reserves the right to change any fees (which includes but
                    is not limited to, increasing prices on existing or new Services and
                    charging a fee for upgrades and/or for a service for which VistaPrint
                    does not currently charge a fee) at any time and from time to time,
                    provided, however, that VistaPrint will provide Member with reasonable
                    notice prior to making any fee changes to existing Services.
                </p>

                {/* Subsection: Taxes */}
                <h3 className="text-lg lg:text-xl font-semibold mt-4">Taxes</h3>
                <p className="text-gray-700 leading-relaxed text-sm lg:text-base">
                    Member agrees to pay GST or other similar taxes, whether
                    international, national, state, or local, however designated, which
                    are levied or imposed or may be levied or imposed, with respect to
                    this Agreement. Member is responsible and liable for any fees,
                    including attorney and collection fees, that Vistaprint may incur in
                    its efforts to collect any remaining balances due from Member.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4 text-sm lg:text-base">
                    In any case, the liability of Vistaprint under the GST regime would be
                    limited to the amount of tax charged by Vistaprint.
                </p>
            </section>
        </div>
    )
}

export default Privacysection
