<?php
header('Content-Type: application/json');

// File where votes will be stored
$vote_file = 'votes.json';

// Get existing votes
$votes = json_decode(file_get_contents($vote_file), true);

// If vote request is received
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);

    // Increase the vote for the chosen dish
    if (isset($input['dish'])) {
        $dish = $input['dish'];
        if (isset($votes[$dish])) {
            $votes[$dish] += 1;
        } else {
            $votes[$dish] = 1;
        }

        // Save updated votes
        file_put_contents($vote_file, json_encode($votes));

        echo json_encode(["status" => "success", "message" => "Vote recorded for " . $dish]);
    }
} else if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Return votes
    echo json_encode($votes);
}
