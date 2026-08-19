'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { MessageSquare, Sparkles, ArrowRight, Loader2, Send } from 'lucide-react';

const promptChips = [
  "How do I secure my hybrid workforce?",
  "What does a Zero Trust roadmap look like?",
  "How can I modernize my data center?",
  "What's involved in a cloud migration?",
  "How fast can I get 24×7 SOC coverage?",
  "Can ESSL help with disaster recovery planning?",
];

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

const markdownComponents: Record<string, React.FC<any>> = {
  h1: ({ children }) => <h1 className="text-sm font-bold mt-2 mb-1 text-white">{children}</h1>,
  h2: ({ children }) => <h2 className="text-sm font-bold mt-2 mb-1 text-white">{children}</h2>,
  h3: ({ children }) => <h3 className="text-sm font-bold mt-2 mb-1 text-white">{children}</h3>,
  h4: ({ children }) => <h4 className="text-xs font-bold mt-1.5 mb-1 text-white">{children}</h4>,
  p: ({ children }) => <p className="mb-2 last:mb-0 leading-relaxed">{children}</p>,
  strong: ({ children }) => <strong className="font-bold text-white">{children}</strong>,
  ul: ({ children }) => <ul className="list-disc pl-4 my-1.5 space-y-0.5">{children}</ul>,
  ol: ({ children }) => <ol className="list-decimal pl-4 my-1.5 space-y-0.5">{children}</ol>,
  li: ({ children }) => <li className="my-0.5 leading-relaxed">{children}</li>,
  a: ({ href, children }) => {
    const linkUrl = href || '#';
    const isInternal = linkUrl.startsWith('/') || linkUrl.startsWith('#');
    if (isInternal) {
      return (
        <Link
          href={linkUrl}
          className="text-[#3f94cf] underline font-semibold hover:text-white transition-colors inline-flex items-center gap-0.5"
        >
          {children}
        </Link>
      );
    }
    return (
      <a
        href={linkUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#3f94cf] underline font-semibold hover:text-white transition-colors inline-flex items-center gap-0.5"
      >
        {children}
      </a>
    );
  },
  table: ({ children }) => (
    <div className="overflow-x-auto w-full my-3 border border-white/10 rounded-lg">
      <table className="w-full border-collapse text-xs text-left min-w-[400px]">{children}</table>
    </div>
  ),
  thead: ({ children }) => <thead className="bg-white/10 text-white font-bold">{children}</thead>,
  tbody: ({ children }) => <tbody className="divide-y divide-white/5">{children}</tbody>,
  tr: ({ children }) => <tr className="hover:bg-white/5 transition-colors">{children}</tr>,
  th: ({ children }) => <th className="p-2 border border-white/10 font-bold">{children}</th>,
  td: ({ children }) => <td className="p-2 border border-white/10 text-slate-300 leading-normal">{children}</td>,
};

export default function AIAdvisorTeaser() {
  const [isVisible, setIsVisible] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const chatMessagesContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (messages.length > 0 || loading) {
      if (chatMessagesContainerRef.current) {
        chatMessagesContainerRef.current.scrollTop = chatMessagesContainerRef.current.scrollHeight;
      }
    }
  }, [messages, loading]);

  const handleSendMessage = async (textToSend: string) => {
    const query = textToSend.trim();
    if (!query || loading) return;

    const userMessage: ChatMessage = { role: 'user', content: query };
    const updatedHistory = [...messages, userMessage];

    setMessages(updatedHistory);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/ai-advisor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: query,
          history: messages.map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      let data: any = null;
      try {
        data = await res.json();
      } catch (parseErr) {
        console.error('[AI Advisor Client JSON Parse Error]', parseErr);
      }

      if (!res.ok) {
        console.error('[AI Advisor Client Fetch Error]', res.status, res.statusText, data);
        const serverErrorMessage =
          data?.error || data?.message || 'Something went wrong — please try again.';
        setMessages((prev) => [
          ...prev,
          { role: 'assistant', content: serverErrorMessage },
        ]);
      } else if (data?.error) {
        console.error('[AI Advisor Client API Error Payload]', data);
        setMessages((prev) => [
          ...prev,
          { role: 'assistant', content: data.error },
        ]);
      } else if (data?.reply) {
        setMessages((prev) => [
          ...prev,
          { role: 'assistant', content: data.reply },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          { role: 'assistant', content: 'Something went wrong — please try again.' },
        ]);
      }
    } catch (netErr) {
      console.error('[AI Advisor Client Network Failure]', netErr);
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: 'Something went wrong — please try again.',
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-advisor" ref={sectionRef} className="relative w-full section-padding scroll-mt-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-[#f8fafc]">
        <Image
          src="/images/ai-advisor-bg.jpg"
          alt="AI Advisor Mesh Background"
          fill
          sizes="100vw"
          className="object-cover opacity-100"
          loading="lazy"
        />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-accent-2/10 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className={`transition-opacity transition-transform duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-[rgb(20,109,174)] border border-[rgb(20,109,174)]/20 bg-[rgb(20,109,174)]/5 mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              AI-Powered
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              Ask Our{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                AI Advisor
              </span>
            </h2>
            <p className="text-slate-700 text-lg leading-relaxed">
              Get instant, intelligent answers about cybersecurity solutions, infrastructure design,
              and managed services — powered by ESSL&apos;s real service and product knowledge base.
            </p>
          </div>

          {/* Right — Interactive Chat Widget */}
          <div className={`transition-opacity transition-transform duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#0f1420]/95 backdrop-blur-xl">
              {/* Chat Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0a0e17]/80">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[rgb(20,109,174)] to-[#3f94cf] flex items-center justify-center">
                    <MessageSquare className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <span className="text-sm font-medium text-white">ESSL AI Advisor</span>
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span className="text-xs text-slate-400">Online</span>
                    </div>
                  </div>
                </div>

                {messages.length > 0 && (
                  <button
                    onClick={() => setMessages([])}
                    className="text-xs text-slate-400 hover:text-white transition-colors"
                  >
                    Clear Chat
                  </button>
                )}
              </div>

              {/* Chat Window Container */}
              <div ref={chatMessagesContainerRef} className="p-6 h-[380px] overflow-y-auto space-y-4 text-sm scrollbar-thin">
                {messages.length === 0 ? (
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3 font-mono">Try asking:</p>
                    <div className="space-y-2.5">
                      {promptChips.map((chip, index) => (
                        <button
                          key={index}
                          onClick={() => !loading && handleSendMessage(chip)}
                          disabled={loading}
                          className="w-full text-left flex items-center gap-3 p-3 rounded-xl border border-white/10 bg-white/[0.03] hover:border-[rgb(20,109,174)]/40 hover:bg-[rgb(20,109,174)]/10 text-slate-200 transition-all duration-200 group"
                        >
                          <MessageSquare className="w-4 h-4 shrink-0 text-[rgb(20,109,174)] group-hover:scale-110 transition-transform" />
                          <span className="text-sm flex-grow">{chip}</span>
                          <ArrowRight className="w-3.5 h-3.5 shrink-0 opacity-0 group-hover:opacity-100 text-[rgb(20,109,174)] transition-all" />
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  messages.map((msg, idx) => (
                    <div
                      key={idx}
                      className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      {msg.role === 'assistant' && (
                        <div className="w-7 h-7 rounded-lg bg-[rgb(20,109,174)]/20 text-[rgb(20,109,174)] flex items-center justify-center shrink-0 mt-0.5">
                          <Sparkles className="w-3.5 h-3.5" />
                        </div>
                      )}
                      <div
                        className={`max-w-[85%] p-3.5 rounded-2xl text-sm leading-relaxed ${
                          msg.role === 'user'
                            ? 'bg-[rgb(20,109,174)] text-white rounded-tr-none'
                            : 'bg-white/10 text-slate-100 rounded-tl-none border border-white/5'
                        }`}
                      >
                        {msg.role === 'user' ? (
                          msg.content
                        ) : (
                          <ReactMarkdown
                            components={markdownComponents}
                            remarkPlugins={[remarkGfm]}
                            rehypePlugins={[rehypeRaw]}
                          >
                            {msg.content}
                          </ReactMarkdown>
                        )}
                      </div>
                    </div>
                  ))
                )}

                {loading && (
                  <div className="flex gap-3 justify-start items-center text-slate-400">
                    <div className="w-7 h-7 rounded-lg bg-[rgb(20,109,174)]/20 text-[rgb(20,109,174)] flex items-center justify-center shrink-0">
                      <Sparkles className="w-3.5 h-3.5 animate-spin" />
                    </div>
                    <div className="flex items-center gap-2 px-3.5 py-2.5 rounded-2xl bg-white/10 text-slate-300 text-xs rounded-tl-none">
                      <Loader2 className="w-3.5 h-3.5 animate-spin text-[rgb(20,109,174)]" />
                      <span>Thinking...</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Input Form */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (!loading && input.trim()) {
                    handleSendMessage(input);
                  }
                }}
                className="px-6 pb-6 pt-2"
              >
                <div className="flex items-center gap-2 p-2.5 rounded-xl border border-white/15 bg-white/[0.04] focus-within:border-[rgb(20,109,174)]/60 transition-colors">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask about ESSL's services..."
                    disabled={loading}
                    className="flex-1 bg-transparent text-sm text-white placeholder-slate-400 outline-none px-2"
                  />
                  <button
                    type="submit"
                    disabled={!input.trim() || loading}
                    className="w-9 h-9 rounded-lg bg-[rgb(20,109,174)] hover:bg-[#176ca7] disabled:opacity-40 disabled:hover:bg-[rgb(20,109,174)] flex items-center justify-center transition-all shrink-0 text-white"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>

              {/* Decorative glow */}
              <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-3/4 h-40 bg-[rgb(20,109,174)]/10 blur-[80px] rounded-full pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
