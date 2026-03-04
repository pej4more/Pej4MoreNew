import { useState, useRef, useEffect } from "react";
import { Send, Bot, User, X, MessageSquare, ChevronDown } from "lucide-react";
import { sendChatQuery } from "@/lib/ai-client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion, AnimatePresence } from "framer-motion";

type Message = { role: "user" | "ai"; content: string; followup?: string | null };

export function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { role: "ai", content: "Hello! I'm your AI assistant. How can I help you today?" }
    ]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTo({
                top: scrollRef.current.scrollHeight,
                behavior: "smooth",
            });
        }
    }, [messages, isLoading]);

    const handleSend = async () => {
        if (!input.trim() || isLoading) return;

        const userMsg = input.trim();
        setMessages((prev) => [...prev, { role: "user", content: userMsg }]);
        setInput("");
        setIsLoading(true);

        try {
            const result = await sendChatQuery(userMsg);
            setMessages((prev) => [
                ...prev,
                { role: "ai", content: result.text, followup: result.followup }
            ]);
        } catch (err) {
            setMessages((prev) => [
                ...prev,
                { role: "ai", content: "I'm sorry, I'm having trouble connecting right now. Please try again later." }
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="mb-4"
                    >
                        <Card className="w-80 sm:w-96 shadow-2xl border-primary/20 bg-background/95 backdrop-blur-sm overflow-hidden flex flex-col h-[500px]">
                            <CardHeader className="p-4 border-b bg-primary text-primary-foreground flex flex-row items-center justify-between space-y-0">
                                <CardTitle className="flex items-center gap-2 text-base font-bold">
                                    <Bot className="w-5 h-5" />
                                    AI Assistant
                                </CardTitle>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => setIsOpen(false)}
                                    className="h-8 w-8 text-primary-foreground hover:bg-primary-foreground/20"
                                >
                                    <X className="w-4 h-4" />
                                </Button>
                            </CardHeader>

                            <CardContent className="flex-1 p-0 overflow-hidden">
                                <ScrollArea className="h-full p-4">
                                    <div className="space-y-4">
                                        {messages.map((m, i) => (
                                            <div
                                                key={i}
                                                className={`flex gap-3 ${m.role === "user" ? "flex-row-reverse" : "flex-row"}`}
                                            >
                                                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${m.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                                                    }`}>
                                                    {m.role === "user" ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                                                </div>
                                                <div className={`flex flex-col gap-1 max-w-[75%] ${m.role === "user" ? "items-end" : "items-start"}`}>
                                                    <div className={`p-3 rounded-2xl text-sm ${m.role === "user"
                                                            ? "bg-primary text-primary-foreground rounded-tr-none"
                                                            : "bg-muted text-foreground rounded-tl-none"
                                                        }`}>
                                                        {m.content}
                                                    </div>
                                                    {m.followup && (
                                                        <button
                                                            onClick={() => setInput(m.followup!)}
                                                            className="text-xs text-primary hover:underline bg-primary/5 px-2 py-1 rounded-full mt-1 text-left"
                                                        >
                                                            {m.followup}
                                                        </button>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                        {isLoading && (
                                            <div className="flex gap-3">
                                                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center shrink-0">
                                                    <Bot className="w-4 h-4 text-muted-foreground" />
                                                </div>
                                                <div className="bg-muted p-3 rounded-2xl rounded-tl-none">
                                                    <div className="flex gap-1">
                                                        <span className="w-1.5 h-1.5 bg-foreground/30 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                                        <span className="w-1.5 h-1.5 bg-foreground/30 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                                        <span className="w-1.5 h-1.5 bg-foreground/30 rounded-full animate-bounce"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        <div ref={scrollRef} />
                                    </div>
                                </ScrollArea>
                            </CardContent>

                            <CardFooter className="p-4 border-t bg-muted/30">
                                <form
                                    onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                                    className="flex w-full gap-2 items-center"
                                >
                                    <Input
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                        placeholder="Type your message..."
                                        disabled={isLoading}
                                        className="flex-1 bg-background border-primary/10 focus-visible:ring-primary shadow-sm"
                                    />
                                    <Button
                                        type="submit"
                                        size="icon"
                                        disabled={isLoading || !input.trim()}
                                        className="shadow-md shrink-0 ring-offset-background transition-all hover:scale-105 active:scale-95"
                                    >
                                        <Send className="w-4 h-4" />
                                    </Button>
                                </form>
                            </CardFooter>
                        </Card>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <Button
                    onClick={() => setIsOpen(!isOpen)}
                    size="icon"
                    className="h-14 w-14 rounded-full shadow-2xl ring-4 ring-primary/10 transition-all"
                >
                    {isOpen ? <ChevronDown className="w-7 h-7" /> : <MessageSquare className="w-7 h-7" />}
                </Button>
            </motion.div>
        </div>
    );
}
