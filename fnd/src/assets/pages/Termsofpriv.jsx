import React from 'react'
import Navbar from '../components/Navbar'
const Termsofpriv = () => {
  return (
    <div>
        <Navbar/>
      <div className="tcontainer bg-red-950 px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4"><p class="text-white tracking-light text-[32px] font-bold leading-tight min-w-72">Terms of Service</p></div>
            <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Acceptance of Terms</h3>
            <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
              By accessing or using TruthGuard, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
            <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">User Responsibilities</h3>
            <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
              Users are responsible for their use of TruthGuard and any content they submit. You agree not to use the service for any unlawful or prohibited activities.
            </p>
            <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Intellectual Property Rights</h3>
            <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
              All content and materials on TruthGuard, including but not limited to logos, text, and software, are the property of TruthGuard or its licensors and are protected by
              intellectual property laws.
            </p>
            <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Disclaimer of Warranties</h3>
            <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
              TruthGuard is provided 'as is' without any warranties, express or implied. We do not guarantee the accuracy, completeness, or reliability of the service.
            </p>
            <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Limitation of Liability</h3>
            <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
              TruthGuard shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use the service.
            </p>
            <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Privacy Policy</h3>
            <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
              Your use of TruthGuard is also governed by our Privacy Policy, which can be found [link to privacy policy]. Please review our Privacy Policy to understand how we
              collect, use, and protect your information.
            </p>
            <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Governing Law</h3>
            <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
              These Terms of Service shall be governed by and construed in accordance with the laws of the jurisdiction in which TruthGuard operates, without regard to its conflict
              of law provisions.
            </p>
            <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Changes to Terms</h3>
            <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
              TruthGuard reserves the right to modify or revise these Terms of Service at any time. Your continued use of the service after any such changes constitutes your
              acceptance of the new Terms of Service.
            </p>
          </div>
        </div>
    </div>
  )
}

export default Termsofpriv

