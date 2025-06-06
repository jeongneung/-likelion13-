    import styled from "styled-components";
    import LogoImage from "../assets/images/logo.avif";
    import { useState } from "react";

    const SORT_OPTIONS = [
    { label: "홈", value: "home" },
    { label: "높은 가격순", value: "high" },
    { label: "낮은 가격순", value: "low" }
    ];

    export default function Header({ onSortSelect }) {
    const [selectedOption, setSelectedOption] = useState("home");
    const [isOpen, setIsOpen] = useState(false);

    const handleSelect = (optionValue) => {
        setSelectedOption(optionValue);
        setIsOpen(false);
        onSortSelect(optionValue); 
    };

    return (
        <Container>
        <Logo src={LogoImage} alt="Logo" />
        <DropdownContainer>
            <DropdownHeader onClick={() => setIsOpen(!isOpen)}>
            {SORT_OPTIONS.find((opt) => opt.value === selectedOption).label}
            </DropdownHeader>
            {isOpen && (
            <DropdownList>
                {SORT_OPTIONS.map((option) => (
                <DropdownItem
                    key={option.value}
                    onClick={() => handleSelect(option.value)}
                    selected={option.value === selectedOption}
                >
                    {option.label}
                    {option.value === selectedOption && <Check>✔</Check>}
                </DropdownItem>
                ))}
            </DropdownList>
            )}
        </DropdownContainer>
        </Container>
    );
    }

    const Container = styled.div`
    display: flex;
    width: 100%;
    height: 80px;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    `;

    const Logo = styled.img`
    height: 100px;
    width: auto;
    `;

    const DropdownContainer = styled.div`
    position: relative;
    cursor: pointer;
    margin-right: 30px;
    `;

    const DropdownHeader = styled.div`
    font-size: 16px;
    font-weight: 500;
    color: #1c1b1a;
    `;

    const DropdownList = styled.ul`
    position: absolute;
    top: 30px;
    right: 0;
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    width: 180px;
    padding: 8px 0;
    z-index: 100;
    `;

    const DropdownItem = styled.li`
    list-style: none;
    padding: 10px 16px;
    font-size: 14px;
    color: ${({ selected }) => (selected ? "#000" : "#555")};
    background-color: ${({ selected }) => (selected ? "#f5f5f5" : "white")};
    display: flex;
    justify-content: space-between;

    &:hover {
        background-color: #f0f0f0;
    }
    `;

    const Check = styled.span`
    color: black;
    `;
